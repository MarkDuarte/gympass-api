import { beforeEach, describe, expect, it } from 'vitest'
import { CheckInsRepository } from '@/repositories/checkin-ins-repository'
import { CheckInUseCase } from './check-in'
import { InMemoryCheckInRepository } from '@/repositories/in-memory/checkin-in-memory-repository'

let checkInsRepository: CheckInsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInRepository()
    sut = new CheckInUseCase(checkInsRepository)
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
