#!/bin/bash

echo "Upgrading pip..."
pip install --upgrade pip
echo "Pip upgraded."

echo "Installing requirements..."
pip install -r docs/api_reference/requirements.txt
echo "Requirements installed."

export PYTHONPATH="${PYTHONPATH}:/opt/render/project/src/libs/"
echo "PYTHONPATH set to: $PYTHONPATH"

# Add any other setup or run commands you need
