import os
import subprocess
import shutil
from dotenv import load_dotenv

load_dotenv()

REPO_PATH = os.getenv('REPO_PATH')  # Path to the local repository (e.g., ~/dev/my-project)
GITHUB_REPO_URL = os.getenv('GITHUB_REPO_URL')  # Full repo URL (e.g., git@github.com:youruser/yourrepo.git)
BRANCH_NAME = os.getenv('BRANCH_NAME')  # Name of the branch to push to


def clone_or_update_repo(repo_path, github_repo_url, branch_name):
    """Clones or updates a git repository."""
    if os.path.exists(repo_path):
        print(f"Repository exists. Updating...")
        try:
            subprocess.run(['git', 'fetch'], cwd=repo_path, check=True, capture_output=True)
            subprocess.run(['git', 'checkout', branch_name], cwd=repo_path, check=True, capture_output=True)
            subprocess.run(['git', 'pull'], cwd=repo_path, check=True, capture_output=True)
        except subprocess.CalledProcessError as e:
            print(f"Error updating repository: {e.stderr.decode()}")
            return False
    else:
        print(f"Repository does not exist. Cloning...")
        try:
            subprocess.run(['git', 'clone', github_repo_url, repo_path], check=True, capture_output=True)
            subprocess.run(['git', 'checkout', branch_name], cwd=repo_path, check=True, capture_output=True)
        except subprocess.CalledProcessError as e:
            print(f"Error cloning repository: {e.stderr.decode()}")
            return False

    return True

def copy_files(source_dir, dest_dir):
    """Copies files from source directory to destination, replacing existing ones."""
    try:
        for item in os.listdir(source_dir):
            s = os.path.join(source_dir, item)
            d = os.path.join(dest_dir, item)
            if os.path.isdir(s):
                shutil.copytree(s, d, dirs_exist_ok=True)
            else:
                shutil.copy2(s, d)  # copy2 preserves metadata
    except Exception as e:
       print(f"Error copying files: {e}")
       return False

    return True

def commit_and_push(repo_path, branch_name):
    """Commits changes and pushes them to the remote repository."""
    try:
        subprocess.run(['git', 'add', '.'], cwd=repo_path, check=True, capture_output=True)
        subprocess.run(['git', 'commit', '-m', 'Automated update from script'], cwd=repo_path, check=True, capture_output=True)
        subprocess.run(['git', 'push', 'origin', branch_name], cwd=repo_path, check=True, capture_output=True)
        print("Changes pushed successfully!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error pushing changes: {e.stderr.decode()}")
        return False

def main():
    if not REPO_PATH:
        print("Error: Please set the REPO_PATH in your .env file")
        return
    
    if not GITHUB_REPO_URL:
        print("Error: Please set the GITHUB_REPO_URL in your .env file")
        return

    if not BRANCH_NAME:
        print("Error: Please set the BRANCH_NAME in your .env file")
        return
        
    source_dir = os.path.dirname(os.path.abspath(__file__))  # Source directory: the directory where the script is

    if not clone_or_update_repo(REPO_PATH, GITHUB_REPO_URL, BRANCH_NAME):
        print("Error: Could not clone or update repository. Aborting.")
        return

    if not copy_files(source_dir, REPO_PATH):
        print("Error: Could not copy files. Aborting.")
        return


    if not commit_and_push(REPO_PATH, BRANCH_NAME):
        print("Error: Could not commit and push changes. Aborting.")
        return

if __name__ == "__main__":
    main()
