import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function trimAddress(address: string) {
  // Check if the address is a valid string
  if (typeof address !== "string") {
    return "";
  }

  // Trim the address and add ellipses in the middle
  const trimmedAddress = address.substring(0, 5) + "..." + address.slice(-4);

  return trimmedAddress;
}


export const convertTokeneformatEther= (amount:any, desimal=18)=>{
  if(amount)
 return (BigInt(amount) / BigInt(10 ** desimal)).toString();

}