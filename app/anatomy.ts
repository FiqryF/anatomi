export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'Sistem rangka',color:'#e2d9ba',description:'Tulang menopang tubuh, melindungi organ, dan menjadi tempat melekatnya otot. Jaringan di dalam tulang juga menyimpan mineral dan menghasilkan sel darah.'},
 {id:'muscular',name:'Sistem otot',color:'#a85b50',description:'Otot rangka menghasilkan gerakan dengan menarik titik perlekatannya. Bersama tendon, otot menggerakkan sendi, menjaga postur, dan menghasilkan panas.'},
 {id:'cardiac',name:'Jantung',color:'#b96760',description:'Jantung adalah pompa berotot dengan empat ruang. Katupnya menjaga darah tetap mengalir maju melalui peredaran paru dan seluruh tubuh.'},
 {id:'sensory',name:'Organ indra',color:'#b0c8ce',description:'Organ ini mendukung penglihatan, pendengaran, dan keseimbangan. Jaringan khususnya mendeteksi rangsangan lalu mengirimkan informasi melalui sistem saraf.'},
 {id:'arterial',name:'Pembuluh arteri',color:'#c05245',description:'Arteri membawa darah keluar dari jantung menuju jaringan tubuh atau menuju paru-paru pada peredaran pulmonal.'},
 {id:'venous',name:'Pembuluh vena',color:'#527c9f',description:'Vena mengembalikan darah menuju jantung. Jaringan vena mengumpulkan darah dari tubuh, sedangkan vena pulmonalis membawa darah beroksigen dari paru-paru.'},
 {id:'nervous',name:'Sistem saraf',color:'#d8b565',description:'Otak, sumsum tulang belakang, dan saraf tepi membawa serta mengolah sinyal untuk mendukung sensasi, gerakan, koordinasi, dan pengaturan fungsi tubuh.'},
 {id:'respiratory',name:'Sistem pernapasan',color:'#b98991',description:'Saluran napas membawa udara ke paru-paru, tempat oksigen dan karbon dioksida berpindah antara udara dan darah.'},
 {id:'digestive',name:'Sistem pencernaan',color:'#b8916b',description:'Saluran pencernaan memecah makanan, menyerap zat gizi dan air, lalu meneruskan sisa makanan. Organ tambahan menghasilkan empedu dan enzim pencernaan.'},
 {id:'urinary',name:'Sistem urinaria',color:'#b47961',description:'Ginjal menyaring darah dan mengatur keseimbangan cairan, elektrolit, serta asam-basa. Urine mengalir melalui ureter menuju kandung kemih.'},
 {id:'lymphatic',name:'Sistem limfatik',color:'#879f7c',description:'Pembuluh limfatik mengembalikan kelebihan cairan jaringan ke peredaran darah. Kelenjar getah bening mendukung pertahanan tubuh.'},
 {id:'endocrine',name:'Sistem endokrin',color:'#c5a09a',description:'Organ endokrin melepaskan hormon ke dalam darah untuk mengatur metabolisme, pertumbuhan, respons stres, dan reproduksi.'},
 {id:'reproductive',name:'Sistem reproduksi',color:'#bda098',description:'Struktur reproduksi pria yang ditampilkan berperan dalam produksi, pematangan, dan pengangkutan sperma serta produksi hormon seks.'},
 {id:'integumentary',name:'Permukaan tubuh',color:'#ba9b7d',description:'Permukaan tubuh menjadi acuan anatomi luar. Sistem integumen melindungi tubuh serta membantu sensasi dan pengaturan suhu.'},
 {id:'connective',name:'Jaringan ikat',color:'#aec3bb',description:'Tulang rawan, ligamen, dan jaringan ikat lain menopang, menghubungkan, dan memisahkan struktur tubuh.'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'heart':'Pompa berotot di dalam dada. Sisi kanan mengirim darah ke paru-paru, sedangkan sisi kiri mengedarkan darah ke seluruh tubuh.',
 'liver':'Organ besar di bawah diafragma sebelah kanan. Hati mengolah zat gizi, menghasilkan empedu, dan membuat berbagai protein darah.',
 'brain':'Pusat sistem saraf. Bagian-bagiannya bekerja sama untuk mengatur persepsi, gerakan, ingatan, bahasa, dan berbagai fungsi tubuh.',
 'stomach':'Kantung berotot di antara kerongkongan dan usus halus. Lambung menyimpan serta mencampur makanan dengan asam dan enzim.',
 'spleen':'Organ limfatik di perut kiri atas. Limpa menyaring darah, membuang sel darah yang menua, dan membantu respons imun.',
 'pancreas':'Organ yang berperan dalam pencernaan dan sistem hormon. Pankreas menghasilkan enzim serta hormon seperti insulin dan glukagon.',
 'urinary bladder':'Kantung berotot di panggul yang menyimpan urine dari ginjal sebelum dikeluarkan.',
 'trachea':'Saluran napas utama yang menghubungkan laring dengan bronkus. Cincin tulang rawan menjaganya tetap terbuka saat bernapas.',
 'diaphragm':'Otot lebar yang memisahkan rongga dada dan perut. Saat berkontraksi, diafragma membantu udara masuk ke paru-paru.',
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}
