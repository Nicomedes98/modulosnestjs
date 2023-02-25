import { Controller, Get } from '@nestjs/common';
import { ContactsService } from '../contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get('message')
  getMessage(): string {
    return this.contactsService.getHello();
  }
}
