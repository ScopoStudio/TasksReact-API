const policy = ({ userId, effect, resource, context }) => {
  const policyToReturn = {
    principalId: userId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: '*'
        }
      ]
    },
    context
  }

  return policyToReturn
}

module.exports = policy
