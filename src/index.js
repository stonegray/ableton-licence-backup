// Ableton version and install info

import path from 'path';
import fs from 'fs';
import os from 'os';

import getAbletons from '@stonegray/ableton-detect';
import semver from 'semver';


const outputFile = "Authorize.auz"

// Get a list of all versions installed:

const abletons = await getAbletons();

const writeStream = fs.createWriteStream(outputFile);

writeStream.on('finish', () => {
    console.log('Done, wrote file:', path.resolve(outputFile));
});


function genOfflineCode(licence){
	if (licence.distrobutionType !== 80){
		console.error("Unknown distrobution type "+licence.distrobutionType+", refusing to export.");
		process.exit(3);
	}
	const buf = Buffer.from([
		licence.serial,
		licence.productId.toUpperCase(),
		licence.versionCode.toString(16).toUpperCase(),
		"Standard",
		licence.responseCode,
	].join(',') + '\n');
	writeStream.write(buf);
}


if (abletons.length == 0){
	console.error("Did not find valid Ableton install.");
	process.exit(4);
}
for (const a of abletons){
	if (a.licence == null) continue;
	genOfflineCode(a.licence);
}
for (const addon of abletons[0].addons) {
	if (addon == null) continue;
	genOfflineCode(addon);
}

writeStream.end();