export class LogService {
  log(message: string) {
    console.log(`%c ${message}`, 'background: #222; color: #bada55');
  }
}
