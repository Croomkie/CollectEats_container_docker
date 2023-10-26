#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE CollectEats;
EOSQL

pg_restore -U postgres -d CollectEats /docker-entrypoint-initdb.d/sql_docker_bdd.sql
