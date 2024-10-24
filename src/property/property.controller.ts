import {
  Body,
  Controller,
  Delete,
  Get,
  // Headers,
  Param,
  // ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  // Query,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
// import { HeadersDto } from './dto/headers.dto';
// import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { updatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {
    this.propertyService = propertyService;
  }
  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.findOne(id);
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, groups: ['create'] }))
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.create(body);
  }
  @Patch(':id')
  update(
    @Body() body: updatePropertyDto,
    @Param('id', ParseIdPipe) id,
    // @RequestHeader(
    //   new ValidationPipe({ whitelist: true, validateCustomDecorators: true }),
    // )
    // @Headers('host')
    // header: HeadersDto,
  ) {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id: number) {
    return this.propertyService.delete(id);
  }
}
