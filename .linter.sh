#!/bin/bash
cd /home/kavia/workspace/code-generation/mindclear-63936-b433da46/mindclear_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

