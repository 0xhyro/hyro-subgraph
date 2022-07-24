import { BigInt } from "@graphprotocol/graph-ts"
import { HandleMint } from "../generated/Hyro/Hyro"
import { Hyros } from "../generated/schema"

export function handleMint(event: Mint): void {
  let Hyro = Hyros.load(event.transaction.from.toHex())

  if (!Hyro) {
    Hyro = new Hyros(event.transaction.from.toHex())
    Hyro.totalDeposited = BigInt.fromI32(0)
  }

  Hyro.totalDeposited = Hyro.totalDeposited + BigInt.fromI32(1)
  Hyro.save()
}

export function handleBurn(event: Burn): void {
  let Hyro = Hyros.load(event.transaction.from.toHex())

  if (!Hyro) {
    Hyro = new Hyros(event.transaction.from.toHex())
    Hyro.totalDeposited = BigInt.fromI32(0)
  }
  Hyro.totalDeposited = Hyro.totalDeposited - BigInt.fromI32(1)
  Hyro.save()
}

export function handleSwap(event: Swap): void {
  let Hyro = Hyros.load(event.transaction.from.toHex())

  if (!Hyro) {
    Hyro = new Hyros(event.transaction.from.toHex())
    Hyro.totalDeposited = BigInt.fromI32(0)
  }
  Hyro.totalDeposited = Hyro.totalDeposited - BigInt.fromI32(1)
  Hyro.save()
}


