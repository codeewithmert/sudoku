
                window.eb = new function() {
                    this.userProfile = {"device":{"type":"desktop","os":"undefined"},"location":{"country":{"isoCode2":"TR"}}};
                    this.settings = {"ima_ads":true,"show_killer_new":false,"banner_refresh":true,"banner_refresh_time":45,"ima_ads_on_start":true,"ads_test_tag":false,"ima_ads_delay":60,"ima_ads_on_restart":true,"ima_ads_on_finish":true,"banner_show_main_leaderboard":true,"banner_show_main_square":true,"server_post_event":false,"server_event":true,"banner_show_articles_leaderboard":true,"banner_show_articles_desktop":true,"banner_show_awards_leaderboard":true,"banner_show_awards_square":true,"banner_show_main_low_square":true,"banner_show_skyscraper":true,"count_hints":3,"count_mistakes":3,"use_limitation_hints":true,"use_cmp":false,"show_cheat_menu":false,"use_smart_hints":true,"video_ads_enabled":true,"use_ets":true,"ets_batch_th":20,"ets_batch_tth":20,"ets_event_lt":20,"use_index_exchange":true,"use_pubmatic":true,"use_triplelift":true,"use_ab_hints":true,"use_xandr":true,"use_acuity":false,"use_multi_format_apstag":false,"use_minute_media":false,"use_magnite":true,"sentry_sample_rate":1,"sentry_traces_sample_rate":1,"use_sentry":false,"use_size_mapper_aps_and_prebid":false,"use_banner_winscreen":true,"use_banner_refresh_on_render":false,"use_tournament_services":true,"use_ima_inter":true,"use_smaato":true,"use_sharethrough":true,"use_own_prebid":true,"rewarded_refresh_time":45,"tournaments":true,"ima_ads_refresh_time":20,"use_vidazoo":true,"use_media_net":true,"levels_core_base":true,"use_additional_smart_hints":true,"use_criteo":true,"use_vidazoo_videos":true,"use_openx":true,"use_vidazoo_floor4":false,"use_rise_auction_wrapper":true,"use_croco":false,"ima_ads_tag":"\/21796148150\/web_sudoku_ima_inter_new","use_vidazoo_floor1":false,"use_new_vidazoo_tags":true,"use_lazy_ads":true,"disable_first_time_initialization":true,"disable_banner_ads":false,"disable_interstitital_ads":false,"use_postcards":true,"use_tournaments_module":false,"ets_batch_tth_test":10,"ets_split_batches":false,"use_postcards_desktop_welcomed2":true,"use_postcards_mobile_headeresgsws":false};
                    this.params = {"eaid":700000,"env":"production","buildVersion":4514,"etsHost":"https:\/\/ets.easybrain.com","tournamentHost":"https:\/\/tournaments.easybrain.com","authHost":"https:\/\/cfg.easybrain.com","awardsHost":"https:\/\/awards.easybrain.com","liveOps":"https:\/\/api-liveops.easybrain.com\/api\/v2\/web_core","awardsLo":"https:\/\/awards.easybrain.com\/api\/v1\/awards"};
                };
            


        var newGroups = JSON.parse('[]') || {};

        window.isShowPersonalAdv = Boolean('1');
        window.isShowAnalytics = Boolean('1');
        window.useCmp = Boolean('');
        window.abGroups = JSON.parse('[]');
        window.newGroups = Object.keys(newGroups).map(function(key) { return newGroups[key]; });
        window.fv = 1758255969;
                    window.fs = true;
            


        window.dataLayer = window.dataLayer || [];

        function gtag(){ dataLayer.push(arguments); }

        gtag('consent', 'default', {
            'ad_storage': window.isShowPersonalAdv ? 'granted' : 'denied',
            'analytics_storage': window.isShowAnalytics ? 'granted' : 'denied',
            
            
            
        });
    


        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }

        gtag('js', new Date());
        gtag('config', 'G-LKCCSV4WGG', {
            'anonymize_ip': true,
            'site_speed_sample_rate': 100,
            
        });

        
            


            window.lang = 'tr'.toLowerCase();
            window.serverDate = new Date(1758255969 * 1000);
            window.googleImaLangCode = 'tr';
            window.useETS = Boolean(1);
            window.useRiseNewDesign = Boolean(window.abGroups['ab_rise'] === 'ab_rise_b');
            window.usePubmatic = Boolean(1);
            window.useIndexExchange = Boolean(1);
            window.useTriplelift = Boolean(1);
            window.useAbHint = Boolean(1) || Boolean(window.abGroups['ab_hints_new'] === 'ab_hints_new_on') || Boolean(window.abGroups['ab_hints_old'] === 'ab_hints_old_on');
            window.useXandr = Boolean(1);
            window.useMinuteMedia = Boolean();
            window.useMagnite = Boolean(1);
            window.useMultiFormatApstag = Boolean();
            window.useSizeMapping = Boolean();
            window.useFullScreenInter = !window.eb.settings['disable_interstitital_ads'] && Boolean() && ((window.abGroups['ab_inter3_desktop'] === 'ab_inter3_desktop_googlevidazoofs' ||
            window.abGroups['ab_inter3_mobile'] === 'ab_inter3_mobile_googlevidazoofs') || (window.eb.settings['steroid_inter_desktop_flow'] === 'googlevidazoofs') || (window.eb.settings['steroid_inter_mobile_flow'] === 'googlevidazoofs'));
            window.useBannerRefreshOnRender = Boolean();
            window.useSmaato = Boolean(1);
            window.useSharethrough = Boolean(1);
            window.useVidazoo = Boolean(1);
            window.useMediaNet = Boolean(1);
            window.useLevelCoreBase = Boolean(1);
            window.useRiseAuctionWrapper = Boolean(1);
            window.useVidazooVideoAds = Boolean(1);
            window.useCriteo = Boolean(1);
            window.vidazooWidgetId = "67336c9c5aa4af7b0c5da323";
            window.useOpenx = Boolean(1);
            window.useCroco = Boolean();
            window.useNextLevelFlow = Boolean();
            window.useFinishNewGameLink = Boolean();
            window.useLazyAds = Boolean(1);
            window.useSteroidInter = Boolean();
            window.useTournamentsModule = Boolean();

            window.postcardsGameUrl = '/tr/postcards/event-sudoku';
            window.postcardsEventPageUrl = '/tr/postcards';

            window.usePostcards = Boolean(1);
            window.usePostcardsMobileEsws = Boolean();
            window.usePostcardsMobileEsgsws = Boolean();
            window.usePostcardsMobileHeaderesgsws = Boolean();
            window.usePostcardsDesktopWelcomed2 = Boolean(1);
            window.usePostcardsDesktopNong = Boolean();
            window.usePostcardsDesktopDefault = Boolean();
            window.useEtsSplitBathes = Boolean();

            window.use_anim_score = Boolean();
            window.use_anim_lightprogress = Boolean();
            window.use_anim_darkprogress = Boolean();
            window.use_anim_finish = Boolean();
            window.use_anim_finishscore = Boolean();
            window.use_anim_emoji = Boolean();
            window.use_ab_webworker_all = Boolean();

            window.useModules = Boolean();
            window.useStartLevelAB = Boolean();
            window.enableStartLevel = Boolean();
            window.useNewBreakPoints = Boolean();

            window.translations = {
                days: 'g',
                hours: 's',
                minutes: 'd',
                progress: '{0} / {1}',
                tournamentsDaysTimer: '{days}g {hours}s',
                tournamentsHoursTimer: '{hours}s {minutes}d',
                tournamentsMinutesTimer: '{minutes}d {seconds}sn',
                gameScreenProgressTitle: '%{0} Tamamlandı',
                                ['menu_month_short_1']: '{0} Oca',
                                ['menu_month_short_2']: '{0} Şub',
                                ['menu_month_short_3']: '{0} Mar',
                                ['menu_month_short_4']: '{0} Nis',
                                ['menu_month_short_5']: '{0} May',
                                ['menu_month_short_6']: '{0} Haz',
                                ['menu_month_short_7']: '{0} Tem',
                                ['menu_month_short_8']: '{0} Ağu',
                                ['menu_month_short_9']: '{0} Eyl',
                                ['menu_month_short_10']: '{0} Eki',
                                ['menu_month_short_11']: '{0} Kas',
                                ['menu_month_short_12']: '{0} Ara',
                                play_ad_text: 'Reklamı Oynat',
                help_us_text: 'Reklamlar oyunumuzun ücretsiz olmasını sağlar',
                start_new_game: 'Yeni Oyuna Başla',
                lost_progress_text: 'Oyundaki mevcut ilerleme kaybedilecek',
                cancel_text: 'İptal',
                dont_ask_again: 'Bir daha sorma',
            };

            window.crocoPopupsTranslations = {
                title: 'İlk Deneme Mücadelesi',
                timeUpTitle: 'Süre bitti!',
                timeUpText: 'Ne yazık ki İlk Deneme Mücadelen zamanında tamamlanmadı. Daha fazla etkinlik için takipte kal!',
                congtatsTitle: 'Tebrikler!',
                congratsText: 'Etkinliği tamamlayıp bir ödül kazandın!',
                daysTimer: '{days}g {hours}s',
                hoursTimer: '{hours}s {minutes}d',
                minutesTimer: '{minutes}d {seconds}sn',
                levelsCompleted: 'Tamamlanan Seviyeler',
                levelsMask: '{0}/{1}',
            }

            window.translationsGlobal = {
                'tournament_active_timer_d': 'g',
                'tournament_active_timer_h': 's',
                'tournament_active_timer_m': 'd',
                'tournament_active_timer_s': 'sn',
            };

            window.postcardsTranslations = {
                tutorial_title: 'Nasıl Çalışıyor?',
                tutorial_body_1_desktop: 'Seviye zorluğunu seç ve başlamak için Oyna düğmesine tıkla',
                tutorial_body_1_mobile: 'Seviye zorluğunu seç ve başlamak için Oyna düğmesine dokun',
                tutorial_body_2: 'Benzersiz bir kartpostal açmak ve ödül kazanmak için tüm seviyeleri tamamla!',
                tutorial_body_3: 'Acele et! Etkinlik sınırlı süreli!',
                event_screen_body_desktop: 'Herhangi bir hücreye tıkla ve ardından Oyna düğmesine tıkla',
                event_screen_body_mobile: 'Herhangi bir hücreye dokun ve ardından Oyna düğmesine dokun',
                event_screen_next_body: 'Kartpostal tamamlandı! Bir sonrakine git.',
                event_screen_next_button: 'Sonraki Kartpostal',
                event_screen_locked_body: 'Önce eski kartpostalları tamamla',
                event_screen_locked_button: 'Aktif Kartpostal',
                reward_popup_title: 'İyi İş Çıkardın!',
                reward_popup_body: 'Tüm seviyeleri tamamladın! Ödül senindir!',
                completed_popup_title: 'Tebrikler!',
                completed_popup_body: 'Etkinliği başarıyla tamamladın ve tüm ödülleri kazandın!',
                daysTimer: '{days}g {hours}s',
                hoursTimer: '{hours}s {minutes}d',
                minutesTimer: '{minutes}d {seconds}sn',
                easy: 'Kolay',
                medium: 'Orta',
                hard: 'Zor',
                expert: 'Uzman',
                continue: 'Devam',
                ends_in: 'Bitiş süresi:',
                play: 'Oyna',
                loading: 'Oyun yükleniyor',
                difficulty_title: 'Zorluk:',
                welcome_popup_body: 'Yeni {event_name} etkinliğine katıl ve eşsiz ödüller kazan!',
                welcome_popup_button_play_now: 'Şimdi Oyna',
                time_is_up_popup_title: 'Etkinlik Sona Erdi!',
                time_is_up_popup_subtitle: 'Süre bitti!',
                time_is_up_popup_body: 'Etkinlik sırasında tüm ödüller toplanmadı! Bir dahaki sefere bol şans!',
            };

            window.deviceType = 'desktop';

            document.documentElement.style.setProperty('--vh', document.documentElement.clientHeight + 'px');
            document.documentElement.style.setProperty('--vw', document.documentElement.clientWidth + 'px');
            document.documentElement.style.setProperty('--mg', (Math.min(Math.max((document.documentElement.clientHeight - 130) - (document.documentElement.clientWidth + 110), 0), 30) / 3) + 'px');
            // window.addEventListener('resize', function() {
            //     document.documentElement.style.setProperty('--vh', window.innerHeight + 'px');
            //     document.documentElement.style.setProperty('--vw', window.innerWidth + 'px');
            //     document.documentElement.style.setProperty('--mg', (Math.min(Math.max((window.innerHeight - 130) - (window.innerWidth + 110), 0), 30) / 3) + 'px');
            // });
        


            window.googletag = window.googletag || {cmd: []};
        


                window.googletag = window.googletag || {cmd: []};
            


                    googletag.cmd.push(function() {
                        googletag.pubads().disableInitialLoad();
                    });

                    window.riseCallback = (error, instance) => {
                        if (error) {
                            console.error(error);
                        }
                        AUCTION_INSTANCE = instance;
                    };
                


        window.lang = 'tr';
        window.difficulty = 'easy';
        window.mode = 'classic';
        window.mainPageUrl = '/tr';
        window.crocoEventPageUrl = '/tr/firsttrychallenge';
        window.tournamentPath = '/tr/tournaments';
        window.tournamentDailyPath = '/tr/tournament';

        window.riseRateCallback = function(rateData) {
            console.log("========== Rise auction rate: "+JSON.stringify(rateData));
        }

        window.arrayOfTranslateDates = [
                            '{0} Ocak',
                            '{0} Şubat',
                            '{0} Mart',
                            '{0} Nisan',
                            '{0} Mayıs',
                            '{0} Haziran',
                            '{0} Temmuz',
                            '{0} Ağustos',
                            '{0} Eylül',
                            '{0} Ekim',
                            '{0} Kasım',
                            '{0} Aralık',
                    ];

        window.interEmojiTranslation = [
            'Harika!',
            'Bravo!',
            'Aferin!',
            'Çok İyi!',
            'Dâhice!',
            'Mükemmel!',
            'Süper!',
            'Müthiş!',
            'Muhteşem!',
            'Olağanüstü!',
            'Etkileyici!',
            'İnanılmaz!',
            'Devam!',
            'İyi İş Çıkardın!'
        ]

        window.interTooltipTranslation = [
            'Harika hamle! Bu bulmacayı hallediyorsun.',
            'Başardın! Sayıları gönder gelsin.',
            'Harikulade! Oyun alanı tamamlanmaya yakın.',
            'Bravo! Sudoku ile aran mükemmel!',
            'Harika! Gizemi çözüyorsun.',
            'Mükemmel! Galibiyete bir adım daha yaklaştın.',
            'Devam! Sonuca çok yaklaştın.',
            'Olağanüstü! Gerçek bir Sudoku Ustasısın.',
            'Etkileyici! Izgarayı doldurmaya devam et.',
            'Güzel iş çıkardın! Bulmaca çözüme yaklaşıyor.'
        ]

        window.smartHintTranslation = {
            'LastFreeCell': {
                name: 'Son Boş Hücre',
                desc: {
                    row: ['Haydi [c1]bu sırayı[/c1] inceleyelim', 'Sadece bir boş hücre kaldı ve (N), bu hücreye yerleştirilebilecek tek sayıdır'],
                    col: ['Haydi [c1]bu sütunu[/c1] inceleyelim', 'Sadece bir boş hücre kaldı ve (N), bu hücreye yerleştirilebilecek tek sayıdır'],
                    cube: ['Haydi [c1]bu bloku[/c1] inceleyelim', 'Sadece bir boş hücre kaldı ve (N), bu hücreye yerleştirilebilecek tek sayıdır']
                }
            },
            'LastRemainingCell': {
                name: 'Son Kalan Hücre',
                desc:  {
                    row: ['[c2]Bu hücrelere[/c2] ve vurgulanan alanlara dikkat et', '[c1]Bu sırada[/c1], (N) sayısını içerebilecek yalnızca bir hücre kaldı', 'Mümkün olan tek seçenek olduğundan bu hücre (N) olmalı'],
                    col: ['[c2]Bu hücrelere[/c2] ve vurgulanan alanlara dikkat et', '[c1]Bu sütunda[/c1], (N) sayısını içerebilecek yalnızca bir hücre kaldı', 'Mümkün olan tek seçenek olduğundan bu hücre (N) olmalı'],
                    cube: ['[c2]Bu hücrelere[/c2] ve vurgulanan alanlara dikkat et', '[c1]Bu blokta[/c1], (N) sayısını içerebilecek yalnızca bir hücre kaldı', 'Mümkün olan tek seçenek olduğundan bu hücre (N) olmalı']
                }
            },
            'LastPossibleNumber': {
                name: 'Son Muhtemel Sayı',
                desc: ['[c1]Bu hücreye[/c1] ve vurgulanan alanlardaki sayılara dikkat et', '[c2](N), (N), (N), (N), (N), (N), (N)[/c2] ve [c2](N)[/c2] sayıları zaten kendi sıra, sütun veya blokunda kullanıldı', 'Eksik olan tek sayı (N) olduğundan bu hücre (N) olmalı']
            },
            'Notes': {
                name: 'Notlar',
                desc: ['Bu hücrelerdeki notlar eksik veya yanlış doldurulmuş', 'Çözüme devam etmek için her hücrenin tüm ihtimalleri notlarla doğru bir şekilde doldurulmalıdır']
            },
            'FreeCell': {
                name: 'Boş Hücre',
                desc: ['Çözmek istediğin [c1]hücreyi[/c1] seç']
            },
            'IncorrectNumber': {
                name: 'Yanlış Sayılar',
                desc: ['Bu sudoku bulmacasının yalnızca bir muhtemel çözümü var ve bu hücrelerdeki sayılar çözüme uymuyor', 'Doğru çözümü bulmak için önce tüm ihtimallerin belirlenmesi önemlidir']
            },
            'ObviousSingles': {
                name: 'Açık Tekler',
                desc: ['[c1]Bu hücreye[/c1] dikkat et. Yalnızca bir muhtemel çözüm içeriyor', 'Mümkün olan tek seçenek olduğundan bu hücre [c1](N)[/c1] olmalı']
            },
            'ObviousPairs': {
                name: 'Açık Çiftler',
                desc: {
                    row: ['[c1]Bu sıraya[/c1] ve bu hücrelere dikkat et', 'Bu hücreler yalnızca [c1](N)[/c1] ve [c1](N)[/c1] içerebilir. Yani [c1](N)[/c1] bu hücrelerden [c1]birinde[/c1] ve [c1](N)[/c1] ise [c1]başka birinde[/c1] yer almalı.', 'Bu nedenle, [c1](N)[/c1] ve [c1](N)[/c1] bu sıranın başka herhangi bir hücresine eklenemez'],
                    col: ['[c1]Bu sütuna[/c1] ve bu hücrelere dikkat et', 'Bu hücreler yalnızca [c1](N)[/c1] ve [c1](N)[/c1] içerebilir. Yani [c1](N)[/c1] bu hücrelerden [c1]birinde[/c1] ve [c1](N)[/c1] ise [c1]başka birinde[/c1] yer almalı.', 'Bu nedenle, [c1](N)[/c1] ve [c1](N)[/c1] bu sütunun başka herhangi bir hücresine eklenemez'],
                    cube: ['[c1]Bu bloka[/c1] ve bu hücrelere dikkat et', 'Bu hücreler yalnızca [c1](N)[/c1] ve [c1](N)[/c1] içerebilir. Yani [c1](N)[/c1] bu hücrelerden [c1]birinde[/c1] ve [c1](N)[/c1] ise [c1]başka birinde[/c1] yer almalı.', 'Bu nedenle, [c1](N)[/c1] ve [c1](N)[/c1] bu blokun başka herhangi bir hücresine eklenemez'],
                }
            },
            'ObviousTriples': {
                name: 'Açık Üçlüler',
                desc: {
                    row: ['[c1]Bu sıraya[/c1] ve bu hücrelere dikkat et', '[c2]Bu hücreler[/c2] yalnızca [c2](N)[/c2], [c2](N)[/c2] ve [c2](N)[/c2] içeriyor. Yani bu sayılardan her biri bu hücrelerden birisine gelmeli.', 'Bu nedenle, [c3](N)[/c3], [c3](N)[/c3] ve [c3](N)[/c3] bu sıranın başka herhangi bir hücresine eklenemez'],
                    col: ['[c1]Bu sütuna[/c1] ve bu hücrelere dikkat et', '[c2]Bu hücreler[/c2] yalnızca [c2](N)[/c2], [c2](N)[/c2] ve [c2](N)[/c2] içeriyor. Yani bu sayılardan her biri bu hücrelerden birisine gelmeli.', 'Bu nedenle, [c3](N)[/c3], [c3](N)[/c3] ve [c3](N)[/c3] bu sütunun başka herhangi bir hücresine eklenemez'],
                    cube: ['[c1]Bu bloka[/c1] ve bu hücrelere dikkat et', '[c2]Bu hücreler[/c2] yalnızca [c2](N)[/c2], [c2](N)[/c2] ve [c2](N)[/c2] içeriyor. Yani bu sayılardan her biri bu hücrelerden birisine gelmeli.', 'Bu nedenle, [c3](N)[/c3], [c3](N)[/c3] ve [c3](N)[/c3] bu blokun başka herhangi bir hücresine eklenemez'],
                }
            },
            'HiddenSingles': {
                name: 'Gizli Tekler',
                desc: {
                    row: ['[c1]Bu sıraya[/c1] dikkat et', '[c1](N)[/c1] içerebilecek yalnızca bir hücre var', 'Mümkün olan tek seçenek olduğundan bu hücre [c1](N)[/c1] olmalı'],
                    col: ['[c1]Bu sütuna[/c1] dikkat et', '[c1](N)[/c1] içerebilecek yalnızca bir hücre var', 'Mümkün olan tek seçenek olduğundan bu hücre [c1](N)[/c1] olmalı'],
                    cube: ['[c1]Bu bloka[/c1] dikkat et', '[c1](N)[/c1] içerebilecek yalnızca bir hücre var', 'Mümkün olan tek seçenek olduğundan bu hücre [c1](N)[/c1] olmalı']
                }
            },
            'HiddenPairs': {
                name: 'Gizli Çiftler',
                desc: {
                    row: ['[c1]Bu sıraya[/c1] ve bu hücrelere dikkat et', 'Yalnızca bu hücreler [c2](N)[/c2] ve [c2](N)[/c2] içerebilir. Yani [c2](N)[/c2] bu hücrelerden birinde ve [c2](N)[/c2] ise başka birinde yer almalı.', 'Bu nedenle, [c2](N)[/c2] ve [c2](N)[/c2] hariç tüm diğer notlar bu hücrelere ekleneme'],
                    col: ['[c1]Bu sütuna[/c1] ve bu hücrelere dikkat et', 'Yalnızca bu hücreler [c2](N)[/c2] ve [c2](N)[/c2] içerebilir. Yani [c2](N)[/c2] bu hücrelerden birinde ve [c2](N)[/c2] ise başka birinde yer almalı.', 'Bu nedenle, [c2](N)[/c2] ve [c2](N)[/c2] hariç tüm diğer notlar bu hücrelere ekleneme'],
                    cube: ['[c1]Bu bloka[/c1] ve bu hücrelere dikkat et', 'Yalnızca bu hücreler [c2](N)[/c2] ve [c2](N)[/c2] içerebilir. Yani [c2](N)[/c2] bu hücrelerden birinde ve [c2](N)[/c2] ise başka birinde yer almalı.', 'Bu nedenle, [c2](N)[/c2] ve [c2](N)[/c2] hariç tüm diğer notlar bu hücrelere ekleneme'],
                }
            },
            'PointingPairs': {
                name: 'İşaretli Çiftler',
                desc: {
                    row: ['[c1]Bu bloka[/c1] ve bu hücrelere dikkat et', 'Bu blok içerisinde [c2](N)[/c2] içerebilecek tüm hücreler bir sıraya ait', 'Bu blok içerisinde [c2](N)[/c2], bu hücrelerden birisine eklenecek. Bu nedenle [c2](N)[/c2], bu sıranın başka hiçbir hücresine eklenemez.'],
                    col: ['[c1]Bu bloka[/c1] ve bu hücrelere dikkat et', 'Bu blok içerisinde [c2](N)[/c2] içerebilecek tüm hücreler bir sütuna ait', 'Bu blok içerisinde [c2](N)[/c2], bu hücrelerden birisine eklenecek. Bu nedenle [c2](N)[/c2], bu sütunun başka hiçbir hücresine eklenemez.'],
                    cube_row: ['[c1]Bu sıraya[/c1] ve bu hücrelere dikkat et', 'Bu sıra içerisinde [c2](N)[/c2] içerebilecek tüm hücreler bir bloka ait', 'Bu sıradaki [c2](N)[/c2], bu hücrelerden birisine eklenecek. Bu nedenle [c2](N)[/c2], bu bloktaki başka hiçbir hücreye eklenemez.'],
                    cube_col: ['[c1]Bu sütuna[/c1] ve bu hücrelere dikkat et', 'Bu sütun içerisinde [c2](N)[/c2] içerebilecek tüm hücreler bir bloka ait', 'Bu sütundaki [c2](N)[/c2], bu hücrelerden birisine eklenecek. Bu nedenle [c2](N)[/c2], bu bloktaki başka hiçbir hücreye eklenemez.']
                }
            }
        };

        window.crocoStartPopupTranslations = {
            title: 'İlk Deneme Mücadelesi',
            text: 'İlk Deneme Mücadelesi başladı! Seviyeleri ilk denemende tamamla ve ödülü kazanan oyunculardan biri ol!',
            toEventBtn: 'Etkinliğe Git',
            continueBtn: 'Devam'
        }

        window.moduleTranslations = {
            win_title: 'Mükemmel!',
            win_dc_title: 'Congratulations!',
            continue_text: 'Devam',
            dc_complete_reward: '{0} için tüm günlük mücadeleleri tamamladın ve bu ödülü kazandın!',
            dc_complete_day: '{0}<br />için günlük mücadeleyi tamamladın!',
            easy_text: 'Kolay',
            medium_text: 'Orta',
            hard_text: 'Zor',
            expert_text: 'Uzman',
            evil_text: 'Usta',
            extreme_text: 'Ekstrem',
            new_game_text: 'Yeni Oyun',
            classic_text: 'Klasik',
            killer_text: 'Kazık',
            select_game_mode_text: 'Oyun Modu Seç',
            lost_progress_text: 'Oyundaki mevcut ilerleme kaybedilecek',
            restart_text: 'Yeniden Başla',
            tournamentWinText: 'Turnuvayı tamamlayıp bir madalya kazandın!',
            tournamentLoseText: 'Turnuvayı tamamladın ancak madalya kazanamadın. Bir dahaki sefere tekrar dene!',
            tournamentWinTitle: 'Tebrikler!',
            tournamentLoseTitle: 'Tamamlanan Turnuva',
            next_level: 'Sonraki Seviye',
            best_score: 'En İyi Puan',
            today: 'Bugün',
            this_week: 'Bu Hafta',
            this_month: 'Bu Ay',
            all_time: 'Tüm Zamanlar',
            see_all: 'Tümünü Gör',
            tournament_title: 'Turnuva',
            statistics: 'İstatistikler',
            difficulty_text: 'Zorluk',
            time_text: 'Süre',
            score_test: 'Puan',
            position_text: 'Pozisyon',
            total_score_text: 'Toplam Puan',
            today_new_score: 'Bugünün Yeni En İyi Puanı',
            week_new_score: 'Haftanın Yeni En İyi Puanı',
            month_new_score: 'Ayın Yeni En İyi Puanı',
            alltime_new_score: 'Tüm Zamanların Yeni En İyi Puanı',
                            ['month_short_1']: '{0} OCA',
                            ['month_short_2']: '{0} ŞUB',
                            ['month_short_3']: '{0} MAR',
                            ['month_short_4']: '{0} NİS',
                            ['month_short_5']: '{0} MAY',
                            ['month_short_6']: '{0} HAZ',
                            ['month_short_7']: '{0} TEM',
                            ['month_short_8']: '{0} AĞU',
                            ['month_short_9']: '{0} EYL',
                            ['month_short_10']: '{0} EKİ',
                            ['month_short_11']: '{0} KAS',
                            ['month_short_12']: '{0} ARA',
                        tournament_completed_popup_body_reward_weekly: 'Haftalık turnuvayı tamamlayıp bir madalya kazandın!',
            tournament_completed_popup_body_reward_daily: 'Günlük turnuvayı tamamlayıp bir madalya kazandın!',
            tournament_daily_title: 'Günlük Turnuva',
            tournament_weekly_title: 'Haftalık Turnuva',
        }

        window.moduleNewGame = {
            classic: {},
            killer: {},
        };
    


            window.dcPath = '/tr/challenges';
        


            window.moduleNewGame.classic['easy'] = { text: 'Kolay', url: '/tr/kolay/'};
        


            window.moduleNewGame.classic['medium'] = { text: 'Orta', url: '/tr/orta/'};
        


            window.moduleNewGame.classic['hard'] = { text: 'Zor', url: '/tr/zor/'};
        


            window.moduleNewGame.classic['expert'] = { text: 'Uzman', url: '/tr/uzman/'};
        


            window.moduleNewGame.classic['evil'] = { text: 'Usta', url: '/tr/evil/'};
        


            window.moduleNewGame.classic['extreme'] = { text: 'Ekstrem', url: '/tr/extreme/'};
        


            window.moduleNewGame.killer['easy'] = { text: 'Kolay', url: '/tr/killer/kolay/'};
        


            window.moduleNewGame.killer['medium'] = { text: 'Orta', url: '/tr/killer/orta/'};
        


            window.moduleNewGame.killer['hard'] = { text: 'Zor', url: '/tr/killer/zor/'};
        


            window.moduleNewGame.killer['expert'] = { text: 'Uzman', url: '/tr/killer/uzman/'};
        


    window.PAGE_GPT_BANNERS = [
        // main_square
        {
            setting: 'banner_show_main_square',
            device: 'tablet',
            path: '/21796148150/main_square_tablet',
            blockId: 'div-gpt-ad-1634891271285-0',
            sizes: [[300, 100], [300, 50], 'fluid', [300, 250]],
            videoSizes: [[300, 250]],
            sizeMapper: [
                { minViewPort: [1070, 350], sizes: [[300, 100], [300, 50], 'fluid', [300, 250]] },
                { minViewPort: [0, 0], sizes: [] },
            ],
        },
        {
            setting: 'banner_show_main_square',
            device: 'desktop',
            path: '/21796148150/main_square_desktop',
            blockId: 'div-gpt-ad-1634891177200-0',
            sizes: [[300, 100], [300, 50], [300, 250], 'fluid'],
            videoSizes: [[300, 250]],
            sizeMapper: [
                { minViewPort: [1070, 350], sizes: [[300, 100], [300, 50], [300, 250], 'fluid'] },
                { minViewPort: [0, 0], sizes: [] },
            ],
        },
        // main_low_square_desktop
        {
            setting: 'banner_show_main_low_square',
            device: 'desktop',
            path: '/21796148150/main_low_square_desktop',
            blockId: 'div-gpt-ad-1656502141840-0',
            sizes: [[300, 100], [300, 250], 'fluid', [300, 50]],
            videoSizes: [[300, 250]],
            sizeMapper: [
                { minViewPort: [1070, 700], sizes: [[300, 100], [300, 250], 'fluid', [300, 50]] },
                { minViewPort: [0, 0], sizes: [] },
            ],
        },
        // skyscraper_desktop
        {
            setting: 'banner_show_skyscraper',
            device: window.useNewBreakPoints ? null : 'desktop',
            path: '/21796148150/skyscraper_desktop',
            blockId: 'div-gpt-ad-1656502856214-0',
            sizes: [[160, 600]],
            sizeMapper: [
                { minViewPort: window.useNewBreakPoints ? [1350, 600] : (window.innerHeight < 800 ? [1280, 600] : [1366, 600]), sizes: [[160, 600]] },
                { minViewPort: [1070, 700], sizes: [] },
                { minViewPort: [768, 700], sizes: [[160, 600]] },
                { minViewPort: [0, 0], sizes: [] },
            ],
        }
    ];




        window.PAGE_GPT_BANNERS.push(
            // main_leaderboard
            {
                setting: 'banner_show_main_leaderboard',
                device: 'desktop',
                path: '/21796148150/main_leaderboard_desktop_v2',
                blockId: 'div-gpt-ad-1634890953983-0',
                sizes: [[468, 60], 'fluid', [728, 90]],
                videoSizes: [[320, 180]],
                sizeMapper: [
                    { minViewPort: [1200, 600], sizes: [[728, 90], 'fluid'] },
                    { minViewPort: [1000, 600], sizes: [[728, 90], [468, 60], 'fluid'] },
                    { minViewPort: [700, 400], sizes: [[468, 60]] },
                    { minViewPort: [0, 0], sizes: [] },
                ],
            },
        );
    


        window.PAGE_GPT_REWARD = {
            name: (window.eb && window.eb.settings && window.eb.settings['ima_ads_test_tag']) 
                ? '/22639388115/rewarded_web_example' 
                : '/21796148150/web_reward'
        };
    


        var defaultTag = window.deviceType === 'phone' ? '/21796148150/web_sudoku_full_mob' : '/21796148150/web_sudoku_video_ima_full';
        window.PAGE_GPT_INTER = {
            name: (window.eb && window.eb.settings && window.eb.settings['use_inter_fs_test_tag']) 
                ? '/6355419/Travel/Europe/France/Paris' 
                : window.deviceType === 'phone' ? '/21796148150/web_sudoku_full_mob' : '/21796148150/web_sudoku_video_ima_full',
        };
    


        window.PAGE_GPT_BANNERS.push({
            blockId: 'div-gpt-ad-1692016563318-0',
            path: '/21796148150/phone_banner_winscreen_web',
            sizes: [[300, 100], [300, 50], [320, 50]]
        })
    


    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('dataProcessingOptions', ['LDU'], 0, 0);
    fbq('consent', 'grant');
    fbq('init', '633344124170585');
    fbq('track', 'PageView');
