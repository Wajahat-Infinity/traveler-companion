"use client"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface RecommendationInput {
  travelStyle: string
  season: string
  duration: string
  budget: number
  interests: string[]
  additionalPreferences?: string
}

interface RecommendationResult {
  destinations: {
    id: string
    name: string
    description: string
    location: string
    matchScore: number
    reasons: string[]
    price: string
  }[]
}

export async function getAIRecommendations(input: RecommendationInput): Promise<RecommendationResult> {
  try {
    const prompt = `
      As a travel recommendation AI for Pakistan, recommend 3 destinations based on these preferences:
      
      Travel Style: ${input.travelStyle}
      Season: ${input.season}
      Duration: ${input.duration}
      Budget: PKR ${input.budget} per day
      Interests: ${input.interests.join(", ")}
      Additional Preferences: ${input.additionalPreferences || "None specified"}
      
      For each destination, provide:
      1. Name
      2. Location (region in Pakistan)
      3. Brief description
      4. Match score (percentage)
      5. 5 reasons why it matches the preferences
      6. Estimated price range per day in PKR
      
      Format your response as JSON with this structure:
      {
        "destinations": [
          {
            "id": "destination-slug",
            "name": "Destination Name",
            "description": "Brief description",
            "location": "Region",
            "matchScore": 95,
            "reasons": ["Reason 1", "Reason 2", "Reason 3", "Reason 4", "Reason 5"],
            "price": "PKR X,XXX"
          }
        ]
      }
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: prompt,
      temperature: 0.7,
      maxTokens: 1500,
    })

    // Parse the JSON response
    return JSON.parse(text) as RecommendationResult
  } catch (error) {
    console.error("Error generating AI recommendations:", error)

    // Return fallback recommendations
    return {
      destinations: [
        {
          id: "hunza-valley",
          name: "Hunza Valley",
          description:
            "Perfect for nature lovers and adventure seekers with stunning mountain views and rich cultural experiences.",
          location: "Gilgit-Baltistan",
          matchScore: 98,
          reasons: [
            "Matches your preference for mountain landscapes",
            "Great for photography enthusiasts",
            "Offers cultural experiences you're interested in",
            "Perfect for your selected summer travel dates",
            "Fits your medium trip duration preference",
          ],
          price: "PKR 15,000",
        },
        {
          id: "skardu",
          name: "Skardu",
          description:
            "A paradise for trekkers and nature enthusiasts with breathtaking lakes, valleys, and the mighty Karakoram range.",
          location: "Gilgit-Baltistan",
          matchScore: 92,
          reasons: [
            "Aligns with your adventure seeker travel style",
            "Offers excellent trekking opportunities",
            "Features stunning landscapes for photography",
            "Suitable for your budget range",
            "Good for your preferred trip duration",
          ],
          price: "PKR 18,000",
        },
        {
          id: "kalash-valley",
          name: "Kalash Valley",
          description:
            "Experience the unique culture of the Kalash people, with colorful festivals and beautiful mountain scenery.",
          location: "Khyber Pakhtunkhwa",
          matchScore: 85,
          reasons: [
            "Matches your interest in cultural experiences",
            "Offers unique photography opportunities",
            "Features beautiful mountain landscapes",
            "Provides authentic local cuisine experiences",
            "Suitable for your summer travel dates",
          ],
          price: "PKR 20,000",
        },
      ],
    }
  }
}
