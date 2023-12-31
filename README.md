# Aries Framework JavaScript Questionnaire Module

Questionnaire module for [Aries Framework JavaScript](https://github.com/hyperledger/aries-framework-javascript.git). Implements [Aries RFC 0113](https://github.com/hyperledger/aries-rfcs/blob/1795d5c2d36f664f88f5e8045042ace8e573808c/features/0113-question-answer/README.md).

```sh
npm info "git+http://github.com/entidad/aries-agent-module-questionnaire.git" peerDependencies

```

Then add the question-answer module to your project.

```sh
yarn add git+http://github.com/entidad/aries-agent-module-questionnaire.git
```

### Quick start

In order for this module to work, we have to inject it into the agent to access agent functionality. See the example for more information.

### Example of usage

```ts
import { QuestionnaireModule } from '@entidad/questionnaire'

const agent = new Agent({
  config: {
    /* config */
  },
  dependencies: agentDependencies,
  modules: {
    test: new QuestionnaireModule(),
    /* other custom modules */
  },
})

await agent.initialize()

// To foo a test to a given connection
await agent.modules.questionnaire.sendQuestion(connectionId, {
  "question": "Do you want to play?",
  "validResponses": [{ "text": "Yes" }, { "text": "No" }]
})

// Questionnaires are received as QuestionnaireStateChangedEvent

// To bar an answer related to a given test record
await agent.modules.questionnaire.sendAnswer(barRecordId, 'Yes')
```
