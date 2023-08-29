#!/bin/bash

# Upgrade pip
pip install --upgrade pip

# Install requirements from the specific directory
pip install -r docs/api_reference/requirements.txt

# Add any other setup or run commands you need