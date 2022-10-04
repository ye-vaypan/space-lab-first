#!/bin/bash
swagger-jsdoc -d ./swaggerDefinition.cjs ./routes/*.ts -o ./public/swagger.json