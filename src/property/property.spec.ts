import { Test, TestingModule } from '@nestjs/testing';
import { Property } from './property';

describe('Property', () => {
  let provider: Property;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Property],
    }).compile();

    provider = module.get<Property>(Property);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
