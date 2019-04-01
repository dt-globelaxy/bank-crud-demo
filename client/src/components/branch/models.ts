export interface IBranch {
    id: number
    bankId: number
    bank?: {name : string}
    name: string
    address: string
    updated: Date
    created: Date
}
  