import time
import datetime

# Change these values according to your needs
hosts_path = "/etc/hosts"  # For Linux and macOS
# hosts_path = r"C:\Windows\System32\drivers\etc\hosts"  # For Windows
redirect = "127.0.0.1"
block_list = ["www.example.com", "example.com"]  # Add websites to block

# Specify the time to block the websites
start_blocking_time = 9  # 9 AM
end_blocking_time = 17    # 5 PM

def block_websites():
    print("Blocking websites...")
    with open(hosts_path, 'r+') as file:
        content = file.read()
        for website in block_list:
            if website not in content:
                file.write(redirect + " " + website + "\n")

def unblock_websites():
    print("Unblocking websites...")
    with open(hosts_path, 'r+') as file:
        lines = file.readlines()
        file.seek(0)
        for line in lines:
            if not any(website in line for website in block_list):
                file.write(line)
        file.truncate()

def main():
    while True:
        current_time = datetime.datetime.now()
        if current_time.hour >= start_blocking_time and current_time.hour < end_blocking_time:
            block_websites()
        else:
            unblock_websites()
        time.sleep(60)  # Check every minute

if __name__ == "__main__":
    main()
