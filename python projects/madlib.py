def mad_libs():
    # Prompting the user for inputs
    noun = input("Enter a noun: ")
    verb = input("Enter a verb: ")
    adjective = input("Enter an adjective: ")
    place = input("Enter a place: ")

    # Creating the story
    story = f"""
    Once upon a time in a {adjective} {place}, there was a {noun} that loved to {verb}.
    It was a wonderful adventure that changed their lives forever!
    """

    # Displaying the story
    print("\nYour Mad Libs Story:")
    print(story)

if __name__ == "__main__":
    mad_libs()
