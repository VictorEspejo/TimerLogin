import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';

const rollupConfig = createSpaConfig();

export default merge(rollupConfig, { input: './index.html' });
