const faker = require('faker')
const { policy } = require('../../../../src/v1/helpers')

describe('Helpers', () => {
  describe('Policy', () => {
    it('When policy is called', () => {
      const userId = faker.random.number()
      const effect = faker.lorem.word()
      const resource = faker.lorem.sentence()
      const context = { username: faker.internet.userName() }

      const policyToTest = policy({ userId, effect, resource, context })

      expect(policyToTest).toEqual({
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
      })
    })
  })
})
