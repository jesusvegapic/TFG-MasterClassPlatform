import { MoocBackendApp } from '../../../src/apps/mooc/backend/MoocBackendApp';

export class Applications {
  private static DEV_BACKOFFICE_FRONTEND_PORT: string = '3000';
  private static mooc: MoocBackendApp;

  static async start() {
    
    this.mooc = new MoocBackendApp();

    await this.mooc.start();

    return this.DEV_BACKOFFICE_FRONTEND_PORT;
  }

  static async stop() {
    await this.mooc.stop();
  }
}