import { CheckIn, Prisma } from '@prisma/client'
import { CheckInsRepository } from '../checkin-ins-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryCheckInRepository implements CheckInsRepository {
  public items: CheckIn[] = []

  async findByUserIdOnDate(userId: string, date: Date) {
    const checkOnSameDay = this.items.find(
      (checkin) => checkin.user_id === userId,
    )

    if (!checkOnSameDay) {
      return null
    }

    return checkOnSameDay
  }

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      created_at: new Date(),
    }

    this.items.push(checkIn)

    return checkIn
  }
}
