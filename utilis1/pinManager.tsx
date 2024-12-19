class PinManager {
    private static instance: PinManager;
    private pin: string | null = null;
    private faceVerified: boolean = false;
  
    private constructor() {}
  
    public static getInstance(): PinManager {
      if (!PinManager.instance) {
        PinManager.instance = new PinManager();
      }
      return PinManager.instance;
    }
  
    public setPin(newPin: string): void {
      this.pin = newPin;
    }
  
    public verifyPin(inputPin: string): boolean {
      return this.pin === inputPin;
    }
  
    public hasPin(): boolean {
      return this.pin !== null;
    }
  
    public setFaceVerified(verified: boolean): void {
      this.faceVerified = verified;
    }
  
    public isFaceVerified(): boolean {
      return this.faceVerified;
    }
  
    public resetFaceVerification(): void {
      this.faceVerified = false;
    }
  }
  
  export default PinManager.getInstance();
  
  