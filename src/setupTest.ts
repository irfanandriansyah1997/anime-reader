import * as dotenv from 'dotenv';

import '@testing-library/jest-dom';

dotenv.config({ path: '.env.test' });
require('jest-fetch-mock').enableMocks();
