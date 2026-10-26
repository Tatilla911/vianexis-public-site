import {readFileSync} from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
const read=p=>readFileSync(p,'utf8');
test('external widget loads only following explicit opt-in; never ingests restrictions',()=>{const s=read('src/components/site/TrafficBanWidget.tsx');assert.match(s,/useState\(false\)/);assert.match(s,/allowed && <iframe/);assert.match(s,/referrerPolicy="no-referrer"/);assert.doesNotMatch(s,/fetch\(|localStorage|dangerouslySetInnerHTML/);assert.match(s,/href="https:\/\/trafficban.com\/en"/);});
test('official embed protocol and bilingual paths retained',()=>{const s=read('src/lib/i18n/truck-ban.ts');assert.match(s,/https:\/\/trafficban.com\/plugins\/box.html\?href=trafficban.com&language=en/);for(const path of ['/hu/kamionstop','/en/truck-restrictions'])assert.ok(s.includes(path));assert.ok(s.includes('TrafficBan.com'));});
test('navigation and sitemap expose public restrictions',()=>{assert.match(read('src/components/site/Header.tsx'),/href: truckBanPath\(locale\)/);const sitemap=read('src/app/sitemap.ts');assert.ok(sitemap.includes('/hu/kamionstop'));assert.ok(sitemap.includes('/en/truck-restrictions'));});
test('marketing WIP dependencies excluded',()=>{for(const p of ['kamionstop','truck-restrictions','restrictions'])assert.doesNotMatch(read(`src/app/[locale]/${p}/page.tsx`),/ProductJourney|marketing-metadata/);});
