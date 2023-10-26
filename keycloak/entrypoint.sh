#!/bin/bash
set -e

# Exécutez votre commande d'importation ici
/opt/keycloak/bin/kc.sh import --file "/opt/keycloak/conf/keycloak-conf.json"

# Ensuite, démarrez Keycloak
exec /opt/keycloak/bin/kc.sh start-dev "$@"
