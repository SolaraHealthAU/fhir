#!/bin/bash

# Demo script for Simple Patient Record FHIR Server
# This script demonstrates all the key functionality

set -e

BASE_URL="http://localhost:3000"
echo "🚀 FHIR Simple Patient Record Demo"
echo "=================================="
echo ""

# Check if server is running
echo "📡 Checking server health..."
curl -s "$BASE_URL/health" | jq '.'
echo ""

echo "📋 Server Capability Statement:"
echo "GET $BASE_URL/fhir/metadata"
curl -s "$BASE_URL/fhir/metadata" | jq '.rest[0].resource[0] | {resourceType, interaction, searchParam}'
echo ""

echo "👤 Reading Individual Patients:"
echo "==============================="
echo ""

echo "📖 GET $BASE_URL/fhir/Patient/123 (John Doe):"
curl -s "$BASE_URL/fhir/Patient/123" | jq '{id, name, gender, birthDate}'
echo ""

echo "📖 GET $BASE_URL/fhir/Patient/456 (Jane Smith):"
curl -s "$BASE_URL/fhir/Patient/456" | jq '{id, name, gender, birthDate}'
echo ""

echo "📖 GET $BASE_URL/fhir/Patient/999 (Non-existent - should return 404):"
curl -s -w "HTTP Status: %{http_code}\n" "$BASE_URL/fhir/Patient/999" | jq -r 'if type == "object" then .issue[0].diagnostics else empty end'
echo ""

echo "🔍 Searching Patients:"
echo "====================="
echo ""

echo "🔍 Search by name 'John':"
echo "GET $BASE_URL/fhir/Patient?name=John"
curl -s "$BASE_URL/fhir/Patient?name=John" | jq '{total, entry: [.entry[].resource | {id, name}]}'
echo ""

echo "🔍 Search by family name 'Smith':"
echo "GET $BASE_URL/fhir/Patient?family=Smith"
curl -s "$BASE_URL/fhir/Patient?family=Smith" | jq '{total, entry: [.entry[].resource | {id, name}]}'
echo ""

echo "🔍 Search by given name 'Sarah':"
echo "GET $BASE_URL/fhir/Patient?given=Sarah"
curl -s "$BASE_URL/fhir/Patient?given=Sarah" | jq '{total, entry: [.entry[].resource | {id, name}]}'
echo ""

echo "🔍 Search by gender 'female':"
echo "GET $BASE_URL/fhir/Patient?gender=female"
curl -s "$BASE_URL/fhir/Patient?gender=female" | jq '{total, entry: [.entry[].resource | {id, name, gender}]}'
echo ""

echo "🔍 Search by identifier 'MRN123456':"
echo "GET $BASE_URL/fhir/Patient?identifier=MRN123456"
curl -s "$BASE_URL/fhir/Patient?identifier=MRN123456" | jq '{total, entry: [.entry[].resource | {id, name, identifier}]}'
echo ""

echo "🔍 Search by birth date '1980-01-15':"
echo "GET $BASE_URL/fhir/Patient?birthdate=1980-01-15"
curl -s "$BASE_URL/fhir/Patient?birthdate=1980-01-15" | jq '{total, entry: [.entry[].resource | {id, name, birthDate}]}'
echo ""

echo "🔍 Get all patients (no search parameters):"
echo "GET $BASE_URL/fhir/Patient"
curl -s "$BASE_URL/fhir/Patient" | jq '{total, entry: [.entry[].resource | {id, name}]}'
echo ""

echo "✅ Demo completed successfully!"
echo ""
echo "💡 Try running these commands yourself:"
echo "   curl \"$BASE_URL/fhir/Patient?name=Doe\""
echo "   curl \"$BASE_URL/fhir/Patient?gender=male\""
echo "   curl \"$BASE_URL/fhir/Patient/123\"" 