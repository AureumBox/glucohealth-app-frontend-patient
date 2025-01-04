import { Treatment } from '../../../shared/types/treatment'; // Import the 'Treatment' type from the correct path

export interface CompleteProfileDto {
  fullName: string
  phoneNumber: string
  birthDate: string
  weightInKg: number
  heightInCm: number
  treatment: Treatment
}
