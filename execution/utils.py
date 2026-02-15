import logging
import os
from pathlib import Path

def setup_logger(name=__name__, level=logging.INFO):
    """Sets up a logger with basic configuration."""
    logger = logging.getLogger(name)
    logger.setLevel(level)

    if not logger.handlers:
        handler = logging.StreamHandler()
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    
    return logger

def get_project_root() -> Path:
    """Returns the project root directory."""
    return Path(__file__).parent.parent

def ensure_tmp_dir():
    """Ensures that the .tmp directory exists."""
    tmp_path = get_project_root() / ".tmp"
    tmp_path.mkdir(exist_ok=True)
    return tmp_path

if __name__ == "__main__":
    logger = setup_logger()
    logger.info(f"Project root: {get_project_root()}")
    ensure_tmp_dir()
    logger.info(".tmp directory checked/created.")
