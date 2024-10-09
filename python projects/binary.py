def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2  # Find the middle index

        # Check if the target is present at mid
        if arr[mid] == target:
            return mid
        # If target is greater, ignore the left half
        elif arr[mid] < target:
            left = mid + 1
        # If target is smaller, ignore the right half
        else:
            right = mid - 1

    # Target was not found
    return -1

def main():
    # Example sorted array
    arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    target = int(input("Enter a number to search for: "))

    result = binary_search(arr, target)

    if result != -1:
        print(f"Element {target} found at index {result}.")
    else:
        print(f"Element {target} not found in the array.")

if __name__ == "__main__":
    main()
