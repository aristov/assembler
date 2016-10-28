import replsite from 'raw!././replsite.rawjs';
import testcase from 'raw!././testcase.rawjs';

const SPLIT_STR = '\n\n';

const chunks = testcase.split(SPLIT_STR).map(src => src.replace(/,$/, ''));

chunks.shift();
chunks.pop();

export const data = [replsite, ...chunks];
