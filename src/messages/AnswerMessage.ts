import { AgentMessage, IsValidMessageType, parseMessageType } from '@aries-framework/core'
import { Expose } from 'class-transformer'
import { IsString, IsArray } from 'class-validator'

export class AnswerMessage extends AgentMessage {
  /**
   * Create new AnswerMessage instance.
   * @param options
   */
  public constructor(options: { id?: string; response: string[]; threadId: string }) {
    super()

    if (options) {
      this.id = options.id || this.generateId()
      this.setThread({ threadId: options.threadId })
      this.response = options.response
    }
  }

  @IsValidMessageType(AnswerMessage.type)
  public readonly type = AnswerMessage.type.messageTypeUri
  public static readonly type = parseMessageType('https://didcomm.org/questionnaire/1.0/answer')

  @Expose({ name: 'response' })
  //@IsString()
  @IsArray()
  public response!: string[]
}
