#!/bin/bash

# Add a log message indicating the start of the script
echo "Starting deployment script..."

# Log the current pip version
echo "Current pip version:"
pip --version

# Upgrade pip and log the action
echo "Upgrading pip..."
pip install --upgrade pip
echo "Pip upgraded."

# Log the new pip version
echo "New pip version:"
pip --version

# Install requirements and log the action
echo "Installing requirements from docs/api_reference/requirements.txt..."
pip install -r docs/api_reference/requirements.txt
echo "Requirements installed."

# Upgrade langchain and log the action
echo "Upgrading langchain..."
pip install langchain --upgrade
echo "Langchain upgraded."

# Set the PYTHONPATH and log the action
export PYTHONPATH="${PYTHONPATH}:/opt/render/project/src/libs/"
echo "PYTHONPATH set to: $PYTHONPATH"

# Add a log message indicating the end of the script
echo "Deployment script completed."
