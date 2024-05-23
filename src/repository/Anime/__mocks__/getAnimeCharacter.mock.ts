import type { MockResponseInit } from 'jest-fetch-mock';

import type { GetAnimeCharacterAPIResponseType } from '@/repository/Anime/contract/getAnimeCharacter.contract';

import { safeStringifyJSON } from '@/utils/parse';

/////////////////////////////////////////////////////////////////////////////
// Success API
/////////////////////////////////////////////////////////////////////////////

export const dataMock_AnimeCharacter: GetAnimeCharacterAPIResponseType = {
  data: [
    {
      character: {
        images: {
          jpg: {
            image_url:
              'https://cdn.myanimelist.net/images/characters/11/81049.jpg?s=a4eb0b928f3784b884d0ede290cb022c'
          }
        },
        mal_id: 2539,
        name: 'Anezaki, Mamori',
        url: 'https://myanimelist.net/character/2539/Mamori_Anezaki'
      },
      favorites: 47,
      role: 'Main',
      voice_actors: [
        {
          language: 'Japanese',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/3/78608.jpg?s=38b29d5c7ac8810fcadb50be79c87eb9'
              }
            },
            mal_id: 4,
            name: 'Hirano, Aya',
            url: 'https://myanimelist.net/people/4/Aya_Hirano'
          }
        },
        {
          language: 'English',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/15911.jpg?s=f5593bf3b59871782d708f12da078833'
              }
            },
            mal_id: 318,
            name: 'Higgins, Kate',
            url: 'https://myanimelist.net/people/318/Kate_Higgins'
          }
        },
        {
          language: 'Korean',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/25851.jpg?s=a42fcafff84dad905e956f19721bd419'
              }
            },
            mal_id: 8812,
            name: 'Jeong, Mi Sook',
            url: 'https://myanimelist.net/people/8812/Mi_Sook_Jeong'
          }
        },
        {
          language: 'Spanish',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/3/20969.jpg?s=481cb7bd190d76499c533e788fdd9a27'
              }
            },
            mal_id: 18499,
            name: 'Arellano, Mayra',
            url: 'https://myanimelist.net/people/18499/Mayra_Arellano'
          }
        },
        {
          language: 'French',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/2/70369.jpg?s=bb9b3c724a2bc2448038a21a45b366ac'
              }
            },
            mal_id: 56575,
            name: 'Corbeil, Claudia-Laurie',
            url: 'https://myanimelist.net/people/56575/Claudia-Laurie_Corbeil'
          }
        },
        {
          language: 'Portuguese (BR)',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/69624.jpg?s=f5c3f8eb8587ffeb0faf24ac6a304411'
              }
            },
            mal_id: 56603,
            name: 'Mello, Lia',
            url: 'https://myanimelist.net/people/56603/Lia_Mello'
          }
        }
      ]
    },
    {
      character: {
        images: {
          jpg: {
            image_url:
              'https://cdn.myanimelist.net/images/characters/4/61939.jpg?s=a0b4fed6ed3bd7315db266636483e932'
          },
          webp: {
            image_url:
              'https://cdn.myanimelist.net/images/characters/4/61939.webp?s=a0b4fed6ed3bd7315db266636483e932',
            small_image_url:
              'https://cdn.myanimelist.net/images/characters/4/61939t.webp?s=a0b4fed6ed3bd7315db266636483e932'
          }
        },
        mal_id: 945,
        name: 'Hiruma, Youichi',
        url: 'https://myanimelist.net/character/945/Youichi_Hiruma'
      },
      favorites: 4255,
      role: 'Main',
      voice_actors: [
        {
          language: 'Japanese',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/12828.jpg?s=2604314bbb648ff9de8c683398eb551d'
              }
            },
            mal_id: 297,
            name: 'Tamura, Atsushi',
            url: 'https://myanimelist.net/people/297/Atsushi_Tamura'
          }
        },
        {
          language: 'English',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/3/41281.jpg?s=9cdd7f3211e68f90b3f2dfa9958585e1'
              }
            },
            mal_id: 390,
            name: 'Prince, Derek Stephen',
            url: 'https://myanimelist.net/people/390/Derek_Stephen_Prince'
          }
        },
        {
          language: 'Spanish',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/11346.jpg?s=ba476405779dd744a317d2b99d1b5ab9'
              }
            },
            mal_id: 5684,
            name: 'Barrero, Jes\u00fas',
            url: 'https://myanimelist.net/people/5684/Jes\u00fas_Barrero'
          }
        },
        {
          language: 'Korean',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/15675.jpg?s=7057a661152470001b42520739ae4261'
              }
            },
            mal_id: 14931,
            name: 'Pyo, Yeong Jae',
            url: 'https://myanimelist.net/people/14931/Yeong_Jae_Pyo'
          }
        },
        {
          language: 'Portuguese (BR)',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/2/63710.jpg?s=02c7deabd04e6f08519106c01fcf8214'
              }
            },
            mal_id: 43672,
            name: 'Viana, William',
            url: 'https://myanimelist.net/people/43672/William_Viana'
          }
        }
      ]
    },
    {
      character: {
        images: {
          jpg: {
            image_url:
              'https://cdn.myanimelist.net/images/characters/7/51024.jpg?s=483eb12be404900be2c3d98d8464be1a'
          },
          webp: {
            image_url:
              'https://cdn.myanimelist.net/images/characters/7/51024.webp?s=483eb12be404900be2c3d98d8464be1a',
            small_image_url:
              'https://cdn.myanimelist.net/images/characters/7/51024t.webp?s=483eb12be404900be2c3d98d8464be1a'
          }
        },
        mal_id: 944,
        name: 'Kobayakawa, Sena',
        url: 'https://myanimelist.net/character/944/Sena_Kobayakawa'
      },
      favorites: 849,
      role: 'Main',
      voice_actors: [
        {
          language: 'Japanese',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/2/80313.jpg?s=9dce08c51de682061b953fd6d2cf263f'
              }
            },
            mal_id: 88,
            name: 'Irino, Miyu',
            url: 'https://myanimelist.net/people/88/Miyu_Irino'
          }
        },
        {
          language: 'English',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/3/39030.jpg?s=f0099087fc3f79903d24de2edceb778f'
              }
            },
            mal_id: 225,
            name: 'Lowenthal, Yuri',
            url: 'https://myanimelist.net/people/225/Yuri_Lowenthal'
          }
        },
        {
          language: 'Japanese',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/71461.jpg?s=9f7ddec45957044fb47d45ada4ee4782'
              }
            },
            mal_id: 1172,
            name: 'Kikuchi, Kokoro',
            url: 'https://myanimelist.net/people/1172/Kokoro_Kikuchi'
          }
        },
        {
          language: 'Korean',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/15461.jpg?s=a67c2e5b8b5ae42760db2a421028f045'
              }
            },
            mal_id: 14863,
            name: 'Hong, Beom Gi',
            url: 'https://myanimelist.net/people/14863/Beom_Gi_Hong'
          }
        },
        {
          language: 'Spanish',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/2/78291.jpg?s=a7ec03120b4afe6610f702c0daddc8a6'
              }
            },
            mal_id: 21839,
            name: 'Ruiz, Miguel \u00c1ngel',
            url: 'https://myanimelist.net/people/21839/Miguel_\u00c1ngel_Ruiz'
          }
        },
        {
          language: 'French',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/72971.jpg?s=01f0657e2722145273e297f7a46d75ac'
              }
            },
            mal_id: 62550,
            name: 'de Ruelle, Laurent-Christophe',
            url: 'https://myanimelist.net/people/62550/Laurent-Christophe_de_Ruelle'
          }
        },
        {
          language: 'Portuguese (BR)',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/2/79735.jpg?s=f0c97a1d03a2439c1836e8cff75dbc73'
              }
            },
            mal_id: 43670,
            name: 'Gama, Lucas',
            url: 'https://myanimelist.net/people/43670/Lucas_Gama'
          }
        },
        {
          language: 'Portuguese (BR)',
          person: {
            images: {
              jpg: {
                image_url:
                  'https://cdn.myanimelist.net/images/voiceactors/1/79682.jpg?s=933f582b3f467b336dc6cc6ae844ceb1'
              }
            },
            mal_id: 55954,
            name: 'Mattos, Nicolas',
            url: 'https://myanimelist.net/people/55954/Nicolas_Mattos'
          }
        }
      ]
    }
  ]
};

export const httpMock_AnimeCharacter: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeCharacter),
  status: 200
};

/////////////////////////////////////////////////////////////////////////////
// Error API
/////////////////////////////////////////////////////////////////////////////

export const dataMock_AnimeCharacter_error: GetAnimeCharacterAPIResponseType =
  {};

export const httpMock_AnimeCharacter_error: MockResponseInit = {
  body: safeStringifyJSON(dataMock_AnimeCharacter_error),
  status: 400
};
