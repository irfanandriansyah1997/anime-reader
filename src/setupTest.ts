import * as dotenv from 'dotenv';

import '@testing-library/jest-dom';

dotenv.config({ path: '.env.test' });
require('jest-fetch-mock').enableMocks();

jest.retryTimes(5, { logErrorsBeforeRetry: true });
jest.setTimeout(120000);
