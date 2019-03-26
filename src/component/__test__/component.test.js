
import React from 'react';
import Header from '../header'
import List from '../list'
import Item from '../item'
import  Root from '../../Root'
import { mount, shallow } from 'enzyme';

let wrapper, mounted;
const post = [
    {
      key: 'cats',
      data: [
        {
          kind: 't3',
          data: {
            approved_at_utc: null,
            subreddit: 'cats',
            selftext: '',
            author_fullname: 't2_4olb3',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: 'Please do us mods a favor and if you report something for "Claiming ownership of another person\'s cat", make a post in the post you\'re reporting linking to the OC poster. Thank you!',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/cats',
            hidden: false,
            pwls: 6,
            link_flair_css_class: 'discussion',
            downs: 0,
            thumbnail_height: null,
            hide_score: false,
            name: 't3_9ko0du',
            quarantine: false,
            link_flair_text_color: 'dark',
            author_flair_background_color: '',
            subreddit_type: 'public',
            ups: 995,
            domain: 'self.cats',
            media_embed: {},
            thumbnail_width: null,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: null,
            is_reddit_media_domain: false,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: 'Discussion',
            can_mod_post: false,
            score: 995,
            approved_by: null,
            thumbnail: 'self',
            edited: false,
            author_flair_css_class: null,
            author_flair_richtext: [],
            gildings: {
              gid_1: 0,
              gid_2: 0,
              gid_3: 0
            },
            content_categories: null,
            is_self: true,
            mod_note: null,
            created: 1538458003,
            link_flair_type: 'text',
            wls: 6,
            banned_by: null,
            author_flair_type: 'text',
            contest_mode: false,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: true,
            author_flair_text: '7 year old Pixie Bob - Snickers Tyberious',
            visited: false,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qhta',
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: '9ko0du',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'Minifig81',
            num_crossposts: 1,
            num_comments: 0,
            send_replies: false,
            whitelist_status: 'all_ads',
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: 'dark',
            permalink: '/r/cats/comments/9ko0du/please_do_us_mods_a_favor_and_if_you_report/',
            parent_whitelist_status: 'all_ads',
            stickied: true,
            url: 'https://www.reddit.com/r/cats/comments/9ko0du/please_do_us_mods_a_favor_and_if_you_report/',
            subreddit_subscribers: 1154371,
            created_utc: 1538458003,
            media: null,
            is_video: false
          }
        },
        {
          kind: 't3',
          data: {
            approved_at_utc: null,
            subreddit: 'cats',
            selftext: '',
            author_fullname: 't2_3dmmwbqw',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: 'Out of this world beautiful eyes',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/cats',
            hidden: false,
            pwls: 6,
            link_flair_css_class: 'video',
            downs: 0,
            thumbnail_height: 140,
            hide_score: false,
            name: 't3_b59saz',
            quarantine: false,
            link_flair_text_color: 'dark',
            author_flair_background_color: null,
            subreddit_type: 'public',
            ups: 2524,
            domain: 'v.redd.it',
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: {
              reddit_video: {
                fallback_url: 'https://v.redd.it/h1i6si8k89o21/DASH_1080?source=fallback',
                height: 1080,
                width: 608,
                scrubber_media_url: 'https://v.redd.it/h1i6si8k89o21/DASH_240',
                dash_url: 'https://v.redd.it/h1i6si8k89o21/DASHPlaylist.mpd',
                duration: 6,
                hls_url: 'https://v.redd.it/h1i6si8k89o21/HLSPlaylist.m3u8',
                is_gif: true,
                transcoding_status: 'completed'
              }
            },
            is_reddit_media_domain: true,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: 'Video',
            can_mod_post: false,
            score: 2524,
            approved_by: null,
            thumbnail: 'https://b.thumbs.redditmedia.com/aUMGvcfzBpyJ_V2aVeCF6XLq8_TBXyP9Q5mXGQrGacI.jpg',
            edited: false,
            author_flair_css_class: null,
            author_flair_richtext: [],
            gildings: {
              gid_1: 1,
              gid_2: 0,
              gid_3: 0
            },
            post_hint: 'hosted:video',
            content_categories: null,
            is_self: false,
            mod_note: null,
            created: 1553515181,
            link_flair_type: 'text',
            wls: 6,
            banned_by: null,
            author_flair_type: 'text',
            contest_mode: false,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://external-preview.redd.it/frwAjN_RwburORL9J0dKQj1LZumJMSIccdNzzbe40pk.png?format=pjpg&amp;auto=webp&amp;s=d5dfd3ab4abb8765a280ae52f06d6a4ae2931e7f',
                    width: 640,
                    height: 1138
                  },
                  resolutions: [
                    {
                      url: 'https://external-preview.redd.it/frwAjN_RwburORL9J0dKQj1LZumJMSIccdNzzbe40pk.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=9d62bbd2d6b4d0d0371a50e768d1f2cb350a3978',
                      width: 108,
                      height: 192
                    },
                    {
                      url: 'https://external-preview.redd.it/frwAjN_RwburORL9J0dKQj1LZumJMSIccdNzzbe40pk.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=70db1f383cc20627433671d45113ceaabec0465d',
                      width: 216,
                      height: 384
                    },
                    {
                      url: 'https://external-preview.redd.it/frwAjN_RwburORL9J0dKQj1LZumJMSIccdNzzbe40pk.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=618f87f2f099e096ab472c419bb23067e1db6e7a',
                      width: 320,
                      height: 569
                    },
                    {
                      url: 'https://external-preview.redd.it/frwAjN_RwburORL9J0dKQj1LZumJMSIccdNzzbe40pk.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=7703cf4a769c830047d3fb946bb9f98d101b6ed8',
                      width: 640,
                      height: 1138
                    }
                  ],
                  variants: {},
                  id: 'xbsMXB7N_00go6nts_aHQUpJG7cu5k9ovBpjUBfd5ZE'
                }
              ],
              enabled: false
            },
            media_only: false,
            link_flair_template_id: 'c1134456-f9a1-11e4-b505-0eb74937ef65',
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            visited: false,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qhta',
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'b59saz',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'LiiViiEE',
            num_crossposts: 1,
            num_comments: 31,
            send_replies: true,
            whitelist_status: 'all_ads',
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: null,
            permalink: '/r/cats/comments/b59saz/out_of_this_world_beautiful_eyes/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://v.redd.it/h1i6si8k89o21',
            subreddit_subscribers: 1154371,
            created_utc: 1553515181,
            media: {
              reddit_video: {
                fallback_url: 'https://v.redd.it/h1i6si8k89o21/DASH_1080?source=fallback',
                height: 1080,
                width: 608,
                scrubber_media_url: 'https://v.redd.it/h1i6si8k89o21/DASH_240',
                dash_url: 'https://v.redd.it/h1i6si8k89o21/DASHPlaylist.mpd',
                duration: 6,
                hls_url: 'https://v.redd.it/h1i6si8k89o21/HLSPlaylist.m3u8',
                is_gif: true,
                transcoding_status: 'completed'
              }
            },
            is_video: true
          }
        },
        {
          kind: 't3',
          data: {
            approved_at_utc: null,
            subreddit: 'cats',
            selftext: '',
            author_fullname: 't2_3b2ql4j9',
            saved: false,
            mod_reason_title: null,
            gilded: 1,
            clicked: false,
            title: 'I was told that most rescues are over run with black cats, not because people are superstitious but because they don’t typically photograph well, therefore they aren’t social media friendly. Matilda and I strongly disagree. Go rescue a beautiful black cat.',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/cats',
            hidden: false,
            pwls: 6,
            link_flair_css_class: 'default',
            downs: 0,
            thumbnail_height: 140,
            hide_score: false,
            name: 't3_b52i8v',
            quarantine: false,
            link_flair_text_color: 'dark',
            author_flair_background_color: null,
            subreddit_type: 'public',
            ups: 13963,
            domain: 'i.redd.it',
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: null,
            is_reddit_media_domain: true,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: 'Cat Picture',
            can_mod_post: false,
            score: 13963,
            approved_by: null,
            thumbnail: 'https://a.thumbs.redditmedia.com/Xv9JGEDg94mX38CoboyLyYlDnJp8ir1lcGYfBWOIVy4.jpg',
            edited: false,
            author_flair_css_class: null,
            author_flair_richtext: [],
            gildings: {
              gid_1: 3,
              gid_2: 1,
              gid_3: 0
            },
            post_hint: 'image',
            content_categories: null,
            is_self: false,
            mod_note: null,
            created: 1553466606,
            link_flair_type: 'text',
            wls: 6,
            banned_by: null,
            author_flair_type: 'text',
            contest_mode: false,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://preview.redd.it/2j5rrjn985o21.jpg?auto=webp&amp;s=ab7c52acd25cbcfb78ad5dad2269a3ff1507c792',
                    width: 640,
                    height: 853
                  },
                  resolutions: [
                    {
                      url: 'https://preview.redd.it/2j5rrjn985o21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=a32f7f81f875fd7eaa4c068343a48cd659a7930e',
                      width: 108,
                      height: 143
                    },
                    {
                      url: 'https://preview.redd.it/2j5rrjn985o21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=b7b1a8277b68419451c5e52a86b832328d47bbb2',
                      width: 216,
                      height: 287
                    },
                    {
                      url: 'https://preview.redd.it/2j5rrjn985o21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=ec1d81039175980f23fb1e140070ab652516d860',
                      width: 320,
                      height: 426
                    },
                    {
                      url: 'https://preview.redd.it/2j5rrjn985o21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=74c5a72bd3e4e7a4c4661fceb1a4828076f6d1e8',
                      width: 640,
                      height: 853
                    }
                  ],
                  variants: {},
                  id: '2wLOXku1rFpSS27KywZnPTQnWTVgSSBm2rSJqbpD14o'
                }
              ],
              enabled: true
            },
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            visited: false,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qhta',
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'b52i8v',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'MargaretCMoore',
            num_crossposts: 1,
            num_comments: 407,
            send_replies: true,
            whitelist_status: 'all_ads',
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: null,
            permalink: '/r/cats/comments/b52i8v/i_was_told_that_most_rescues_are_over_run_with/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://i.redd.it/2j5rrjn985o21.jpg',
            subreddit_subscribers: 1154371,
            created_utc: 1553466606,
            media: null,
            is_video: false
          }
        },
        {
          kind: 't3',
          data: {
            approved_at_utc: null,
            subreddit: 'cats',
            selftext: '',
            author_fullname: 't2_ofsz0',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: 'A black and white photo of my black and white cat.',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/cats',
            hidden: false,
            pwls: 6,
            link_flair_css_class: 'default',
            downs: 0,
            thumbnail_height: 140,
            hide_score: false,
            name: 't3_b58g2s',
            quarantine: false,
            link_flair_text_color: 'dark',
            author_flair_background_color: null,
            subreddit_type: 'public',
            ups: 774,
            domain: 'i.redd.it',
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: null,
            is_reddit_media_domain: true,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: 'Cat Picture',
            can_mod_post: false,
            score: 774,
            approved_by: null,
            thumbnail: 'https://b.thumbs.redditmedia.com/F1cdHf6HNfN2qwtnmVR35CkaFVi7H6iq5Jp4jSmYBjE.jpg',
            edited: false,
            author_flair_css_class: null,
            author_flair_richtext: [],
            gildings: {
              gid_1: 0,
              gid_2: 0,
              gid_3: 0
            },
            post_hint: 'image',
            content_categories: null,
            is_self: false,
            mod_note: null,
            created: 1553506394,
            link_flair_type: 'text',
            wls: 6,
            banned_by: null,
            author_flair_type: 'text',
            contest_mode: false,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://preview.redd.it/idtpxa8li8o21.jpg?auto=webp&amp;s=f30cb40b6da8e204b58ea380efbf5dd3131c35f5',
                    width: 1125,
                    height: 1186
                  },
                  resolutions: [
                    {
                      url: 'https://preview.redd.it/idtpxa8li8o21.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=c2167d8058278c30b343b9f308e63d3d578314e6',
                      width: 108,
                      height: 113
                    },
                    {
                      url: 'https://preview.redd.it/idtpxa8li8o21.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=9cc96671ad2fddbee707233bef92cae15047a8b3',
                      width: 216,
                      height: 227
                    },
                    {
                      url: 'https://preview.redd.it/idtpxa8li8o21.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=ed945d7d47d1815ab5d15b2a38c0ce1486c072c7',
                      width: 320,
                      height: 337
                    },
                    {
                      url: 'https://preview.redd.it/idtpxa8li8o21.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=88beb98149346d61924dbc56e037500a92a545a3',
                      width: 640,
                      height: 674
                    },
                    {
                      url: 'https://preview.redd.it/idtpxa8li8o21.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=14d89ef30da7e87789045de354087c7e018c7fc8',
                      width: 960,
                      height: 1012
                    },
                    {
                      url: 'https://preview.redd.it/idtpxa8li8o21.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=d5dbb666ddf8f3fdadc47b3888cc4fa75f06b2bf',
                      width: 1080,
                      height: 1138
                    }
                  ],
                  variants: {},
                  id: 'GyT2RrGw9pxs2RxiwPgunNz1CCT5aM9Wh8e5YVJsEGo'
                }
              ],
              enabled: true
            },
            media_only: false,
            link_flair_template_id: '87ed5570-f6c9-11e4-87e4-0e7d3bf7865f',
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            visited: false,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qhta',
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'b58g2s',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'JakeWalkin',
            num_crossposts: 0,
            num_comments: 7,
            send_replies: true,
            whitelist_status: 'all_ads',
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: null,
            permalink: '/r/cats/comments/b58g2s/a_black_and_white_photo_of_my_black_and_white_cat/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://i.redd.it/idtpxa8li8o21.jpg',
            subreddit_subscribers: 1154371,
            created_utc: 1553506394,
            media: null,
            is_video: false
          }
        },
        {
          kind: 't3',
          data: {
            approved_at_utc: null,
            subreddit: 'cats',
            selftext: '',
            author_fullname: 't2_2zzsdgzg',
            saved: false,
            mod_reason_title: null,
            gilded: 0,
            clicked: false,
            title: 'The mighty lioness consumes her prey',
            link_flair_richtext: [],
            subreddit_name_prefixed: 'r/cats',
            hidden: false,
            pwls: 6,
            link_flair_css_class: 'video',
            downs: 0,
            thumbnail_height: 140,
            hide_score: false,
            name: 't3_b57g2f',
            quarantine: false,
            link_flair_text_color: 'dark',
            author_flair_background_color: null,
            subreddit_type: 'public',
            ups: 1016,
            domain: 'v.redd.it',
            media_embed: {},
            thumbnail_width: 140,
            author_flair_template_id: null,
            is_original_content: false,
            user_reports: [],
            secure_media: {
              reddit_video: {
                fallback_url: 'https://v.redd.it/9avxwm5bt7o21/DASH_720?source=fallback',
                height: 720,
                width: 508,
                scrubber_media_url: 'https://v.redd.it/9avxwm5bt7o21/DASH_240',
                dash_url: 'https://v.redd.it/9avxwm5bt7o21/DASHPlaylist.mpd',
                duration: 11,
                hls_url: 'https://v.redd.it/9avxwm5bt7o21/HLSPlaylist.m3u8',
                is_gif: true,
                transcoding_status: 'completed'
              }
            },
            is_reddit_media_domain: true,
            is_meta: false,
            category: null,
            secure_media_embed: {},
            link_flair_text: 'Video',
            can_mod_post: false,
            score: 1016,
            approved_by: null,
            thumbnail: 'https://b.thumbs.redditmedia.com/dhNnQG0GQ7iEa9Ht9Udq5LdyZvJ2SMWtmWLR7FkiRus.jpg',
            edited: false,
            author_flair_css_class: null,
            author_flair_richtext: [],
            gildings: {
              gid_1: 0,
              gid_2: 0,
              gid_3: 0
            },
            post_hint: 'hosted:video',
            content_categories: null,
            is_self: false,
            mod_note: null,
            created: 1553497916,
            link_flair_type: 'text',
            wls: 6,
            banned_by: null,
            author_flair_type: 'text',
            contest_mode: false,
            selftext_html: null,
            likes: null,
            suggested_sort: null,
            banned_at_utc: null,
            view_count: null,
            archived: false,
            no_follow: false,
            is_crosspostable: false,
            pinned: false,
            over_18: false,
            preview: {
              images: [
                {
                  source: {
                    url: 'https://external-preview.redd.it/SYZP_YwVUxJPE1zxy-JIQvNafam-4cn7_ZKzyVrQbjs.png?format=pjpg&amp;auto=webp&amp;s=932e2b7d83b948c8f9298e6a6ccf1114afeb9fa1',
                    width: 602,
                    height: 854
                  },
                  resolutions: [
                    {
                      url: 'https://external-preview.redd.it/SYZP_YwVUxJPE1zxy-JIQvNafam-4cn7_ZKzyVrQbjs.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=2d6a92aeaf0f3bab3bf3a0c5ac1f2eee6a1733e6',
                      width: 108,
                      height: 153
                    },
                    {
                      url: 'https://external-preview.redd.it/SYZP_YwVUxJPE1zxy-JIQvNafam-4cn7_ZKzyVrQbjs.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=b2ed68ea4bc865809d0b55c519b2c4d098da0d50',
                      width: 216,
                      height: 306
                    },
                    {
                      url: 'https://external-preview.redd.it/SYZP_YwVUxJPE1zxy-JIQvNafam-4cn7_ZKzyVrQbjs.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=341fc21382801fba4a9e4216ec3b54d684596c80',
                      width: 320,
                      height: 453
                    }
                  ],
                  variants: {},
                  id: 'BcTLDJWWYr5W8AGQIMTTFECUE9YT58OOX4IzVEEu08s'
                }
              ],
              enabled: false
            },
            media_only: false,
            can_gild: false,
            spoiler: false,
            locked: false,
            author_flair_text: null,
            visited: false,
            num_reports: null,
            distinguished: null,
            subreddit_id: 't5_2qhta',
            mod_reason_by: null,
            removal_reason: null,
            link_flair_background_color: '',
            id: 'b57g2f',
            is_robot_indexable: true,
            report_reasons: null,
            author: 'Desperate_Tailor',
            num_crossposts: 2,
            num_comments: 23,
            send_replies: true,
            whitelist_status: 'all_ads',
            mod_reports: [],
            author_patreon_flair: false,
            author_flair_text_color: null,
            permalink: '/r/cats/comments/b57g2f/the_mighty_lioness_consumes_her_prey/',
            parent_whitelist_status: 'all_ads',
            stickied: false,
            url: 'https://v.redd.it/9avxwm5bt7o21',
            subreddit_subscribers: 1154371,
            created_utc: 1553497916,
            media: {
              reddit_video: {
                fallback_url: 'https://v.redd.it/9avxwm5bt7o21/DASH_720?source=fallback',
                height: 720,
                width: 508,
                scrubber_media_url: 'https://v.redd.it/9avxwm5bt7o21/DASH_240',
                dash_url: 'https://v.redd.it/9avxwm5bt7o21/DASHPlaylist.mpd',
                duration: 11,
                hls_url: 'https://v.redd.it/9avxwm5bt7o21/HLSPlaylist.m3u8',
                is_gif: true,
                transcoding_status: 'completed'
              }
            },
            is_video: true
          }
        },
      ]
    }
  ]
beforeEach(() => {
    wrapper = shallow(<Header />);
    mounted = mount(
        <Root>
            <List.WrappedComponent post={post[0]} />
        </Root>
    );
})

it('Header is present', () => {
    expect(wrapper.find('.title').length).toEqual(1)
});

it('List posts are rendering', () => {
    console.log(mounted.props().children.props.post)
    expect(mounted.props().children.props.post == post[0]).toEqual(true)
});