def story_generator():
    print("Welcome to the Story Generator!")

    # Get user inputs
    character_name = input("Enter the name of a character: ")
    place = input("Enter a place: ")
    event = input("Enter an event (e.g., a party, a fight, a journey): ")
    feeling = input("Enter a feeling (e.g., happiness, sadness, excitement): ")

    # Create the story
    story = f"""
    Once upon a time, in a faraway {place}, there lived a character named {character_name}.
    One day, {character_name} decided to have {event}.
    Everyone was filled with {feeling} as they gathered to celebrate this special occasion.
    Little did they know, an adventure awaited them that would change their lives forever!
    """

    # Display the generated story
    print("\nYour Generated Story:")
    print(story)

if __name__ == "__main__":
    story_generator()
