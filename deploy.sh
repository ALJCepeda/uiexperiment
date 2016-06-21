#!/bin/bash

#<<COMMENT1
CARG[0]="curl"
CARG[1]="-X"
CARG[2]="POST"
CARG[3]="-H"
CARG[4]="'Content-type: application/json'"
CARG[5]="--data"
CARG[6]="{\"text\": \"Deployment ready. For details:  https://trello.com/\"}"
CARG[7]="https://hooks.slack.com/services/XXXYYYZZZ/AAABBBCC/LLLMMMNNN"

"${CARG[0]}" "${CARG[1]}" "${CARG[2]}" "${CARG[3]}" "${CARG[4]}" "${CARG[5]}" "${CARG[6]}" "${CARG[7]}"
