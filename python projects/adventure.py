def start_game():
    print("Welcome to the Adventure Game!")
    print("You find yourself in a dark forest.")
    first_choice()

def first_choice():
    print("\nYou can go:")
    print("1. Left towards the river")
    print("2. Right towards the mountains")
    
    choice = input("What do you choose? (1 or 2): ")
    
    if choice == "1":
        river_path()
    elif choice == "2":
        mountain_path()
    else:
        print("Invalid choice. Please choose again.")
        first_choice()

def river_path():
    print("\nYou walk towards the river and find a boat.")
    print("You can:")
    print("1. Take the boat across the river")
    print("2. Swim across the river")
    
    choice = input("What do you choose? (1 or 2): ")
    
    if choice == "1":
        print("\nYou safely cross the river and find a treasure chest! You win!")
    elif choice == "2":
        print("\nYou attempt to swim but the current is too strong. You drown. Game over.")
    else:
        print("Invalid choice. Please choose again.")
        river_path()

def mountain_path():
    print("\nYou head towards the mountains and encounter a wild animal.")
    print("You can:")
    print("1. Try to scare it away")
    print("2. Climb a tree to escape")
    
    choice = input("What do you choose? (1 or 2): ")
    
    if choice == "1":
        print("\nThe animal is scared and runs away. You find a cave full of treasure! You win!")
    elif choice == "2":
        print("\nYou climb the tree, but the branch breaks, and you fall. Game over.")
    else:
        print("Invalid choice. Please choose again.")
        mountain_path()

if __name__ == "__main__":
    start_game()
