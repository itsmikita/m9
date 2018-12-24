# Generate self-signed SSL certificates

1. Create private key:
`sudo openssl genrsa -out localhost.key 2048`

2. Sign certificate:
`sudo openssl req -new -x509 -key localhost.key -out localhost.crt -days 360 -subj /CN=localhost `

3. Combine `*.key` and `*.crt` into `*.pem`:
`cat localhost.key localhost.crt >> localhost.pem`

4. [ OPTIONALLY ] Add the certificate as Trusted
`sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain localhost.crt`
