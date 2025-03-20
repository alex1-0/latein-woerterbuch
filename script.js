const vocabulary = [
    { type: "lesson", number: 1 },
    { latin: "adesse", stems: "adsum, adfuī/(affuī)", translation: "da sein; helfen" },
    { latin: "audēre", stems: "audeō, ausus sum", translation: "wagen" },
    { latin: "cūr?", stems: "", translation: "warum?" },
    { latin: "dēbēre", stems: "dēbeō, dēbuī", translation: "müssen, sollen, schulden" },
    { latin: "dominus", stems: "dominī m", translation: "der Herr" },
    { latin: "dubitāre", stems: "dubitō, dubitavī, dubitātum", translation: "zögern; zweifeln" },
    { latin: "equus", stems: "equī m", translation: "das Pferd" },
    { latin: "esse", stems: "sum, fuī", translation: "sein, sich befinden" },
    { latin: "et", stems: "", translation: "und, auch" },
    { latin: "etiam", stems: "", translation: "auch, sogar; (m. Komparativ) noch" },
    { latin: "hūc", stems: "", translation: "hierher" },
    { latin: "iam", stems: "", translation: "schon, bereits, nun" },
    { latin: "ibī", stems: "", translation: "dort, da" },
    { latin: "itaque", stems: "", translation: "deshalb" },
    { latin: "nōn", stems: "", translation: "nicht" },
    { latin: "ōrāre", stems: "ōrō, ōrāvī, ōrātum", translation: "bitten, beten; anbeten" },
    { latin: "populus", stems: "populī m", translation: "das Volk" },
    { latin: "sed", stems: "", translation: "aber, sondern" },
    { latin: "servus", stems: "servī m", translation: "der Sklave, der Diener" },
    { latin: "sōlum", stems: "(Adv.)", translation: "nur" },
    { latin: "stāre", stems: "stō, stetī", translation: "stehen" },
    { latin: "tandem", stems: "(Adv.)", translation: "endlich, schließlich" },
    { latin: "tum", stems: "", translation: "da, dann, damals" },
    { latin: "venīre", stems: "veniō, vēnī", translation: "kommen" },
    { latin: "victōria", stems: "victōriae f", translation: "der Sieg" },
    { latin: "vidēre", stems: "videō, vīdī, vīsum", translation: "sehen" },
    { type: "lesson", number: 2 },
    { latin: "ad", stems: "(m. Akk.)", translation: "zu, nach, bei, an" },
    { latin: "amīcus", stems: "amīcī m", translation: "der Freund" },
    { latin: "ante", stems: "(m. Akk.)", translation: "vor" },
    { latin: "audīre", stems: "audiō, audīvī, audītum", translation: "hören" },
    { latin: "dare", stems: "dō, dedī, datum", translation: "geben" },
    { latin: "diū", stems: "", translation: "lange, lange Zeit" },
    { latin: "ego", stems: "", translation: "ich" },
    { latin: "exspectāre", stems: "exspectō, exspectāvī, exspectātum", translation: "warten (auf), erwarten" },
    { latin: "ita", stems: "", translation: "so" },
    { latin: "nam", stems: "", translation: "denn" },
    { latin: "nōn iam", stems: "", translation: "nicht mehr" },
    { latin: "nunc", stems: "", translation: "jetzt, nun" },
    { latin: "pecūnia", stems: "pecūniae f", translation: "das Geld, das Vermögen" },
    { latin: "per", stems: "(m. Akk.)", translation: "durch" },
    { latin: "post", stems: "(m. Akk.)", translation: "hinter, nach" },
    { latin: "postulāre", stems: "postulō, postulāvī, postulātum", translation: "fordern" },
    { latin: "reperīre", stems: "reperiō, repperī", translation: "finden, wiederfinden" },
    { latin: "rogāre", stems: "rogō, rogāvī, rogātum", translation: "fragen, bitten" },
    { latin: "satis", stems: "(Adv.)", translation: "genug" },
    { latin: "scīre", stems: "sciō, scīvī", translation: "wissen, kennen, verstehen" },
    { latin: "semper", stems: "(Adv.)", translation: "immer" },
    { latin: "tenēre", stems: "teneō, tenuī", translation: "halten, festhalten, besitzen" },
    { latin: "tū", stems: "", translation: "du" },
    { latin: "ubī?", stems: "", translation: "wo?" },
    { latin: "valēre", stems: "valeō, valuī", translation: "gesund sein, stark sein, Einfluss haben" },
    { latin: "via", stems: "viae f", translation: "der Weg, die Straße" },
    { type: "lesson", number: 3 },
    { latin: "animus", stems: "animī m", translation: "der Geist; der Mut; die Gesinnung" },
    { latin: "bene", stems: "(Adv.)", translation: "gut" },
    { latin: "dum", stems: "(m. Ind.)", translation: "während, solange, bis" },
    { latin: "et … et", stems: "", translation: "sowohl … als auch" },
    { latin: "grātia", stems: "grātiae f", translation: "der Dank; die Gnade" },
    { latin: "iniūria", stems: "iniūriae f", translation: "das Unrecht; die Beleidigung" },
    { latin: "negāre", stems: "negō, negāvī, negātum", translation: "leugnen, verneinen; verweigern" },
    { latin: "parāre", stems: "rogō, rogāvī, rogātum", translation: "(vor)bereiten, vorhaben; erwerben" },
    { latin: "paulō", stems: "", translation: "(um) ein wenig" },
    { latin: "poena", stems: "poenae f", translation: "die Strafe" },
    { latin: "prohibēre", stems: "prohibeō, prohibuī", translation: "abhalten, hindern, verhindern" },
    { latin: "respondēre", stems: "respondeō, respondī", translation: "antworten" },
    { latin: "sententia", stems: "sententiae f", translation: "die Meinung; der Satz; der Sinn" },
    { latin: "socius", stems: "sociī m", translation: "der Gefährte, der Verbündete" },
    { latin: "superāre", stems: "superō, superāvī, superātum", translation: "besiegen, überwinden, übertreffen" },
    { latin: "sustinēre", stems: "sustineō, sustinuī", translation: "ertragen, standhalten" },
    { latin: "ūnā", stems: "(Adv.)", translation: "zusammen, zugleich" },
    { latin: "vocāre", stems: "vocō, vocāvī, vocātum", translation: "rufen, nennen, benennen" },
    { type: "lesson", number: 4 },
    { latin: "amāre", stems: "amō, amāvī, amātum", translation: "lieben" },
    { latin: "appellāre", stems: "appellō, appellāvī, appellātum", translation: "rufen, anrufen, nennen" },
    { latin: "at", stems: "", translation: "aber, jedoch" },
    { latin: "atque/ac", stems: "", translation: "und, und auch; (im Vergleich) wie, als" },
    { latin: "cum", stems: "(m. Abl.)", translation: "mit, zusammen mit" },
    { latin: "dē", stems: "(m. Abl.)", translation: "über; von, von … her, von … weg, von … herab" },
    { latin: "ē/ex", stems: "(m. Abl.)", translation: "aus, von … her" },
    { latin: "enim", stems: "(nachgestellt)", translation: "denn, nämlich" },
    { latin: "fuga", stems: "fugae f", translation: "die Flucht" },
    { latin: "in", stems: "(m. Abl.)", translation: "in, an, auf, bei (wo?)" },
    { latin: "in", stems: "(m. Akk.)", translation: "in (… hinein), nach (wohin?); gegen" },
    { latin: "memoria", stems: "memoriae f", translation: "die Erinnerung; das Gedächtnis; die Zeit" },
    { latin: "movēre", stems: "moveō, mōvī, mōtum", translation: "bewegen, beeindrucken" },
    { latin: "nescīre", stems: "nesciō, nescīvī", translation: "nicht wissen, nicht kennen, nicht verstehen" },
    { latin: "nōlle", stems: "nōlō, nōluī, –", translation: "nicht wollen" },
    { latin: "oculus", stems: "oculī m", translation: "das Auge" },
    { latin: "procul", stems: "", translation: "von fern; weit weg" },
    { latin: "prope", stems: "(Adv.)", translation: "nahe, in der Nähe; beinahe" },
    { latin: "propter", stems: "(m. Akk.)", translation: "wegen" },
    { latin: "-que", stems: "(angehängt)", translation: "und" },
    { latin: "sentīre", stems: "sentiō, sēnsī", translation: "fühlen, meinen, wahrnehmen" },
    { latin: "silva", stems: "silvae f", translation: "der Wald" },
    { latin: "tamen", stems: "", translation: "dennoch, jedoch" },
    { latin: "tibī", stems: "(Dat.)", translation: "dir, für dich" },
    { latin: "timēre", stems: "timeō, timuī", translation: "fürchten, Angst haben (vor)" },
    { latin: "velle", stems: "volō, voluī, –", translation: "wollen" },
    { type: "lesson", number: 5 },
    { latin: "ā/ab", stems: "(m. Abl.)", translation: "von, von … her" },
    { latin: "adhūc", stems: "", translation: "bis jetzt, (immer) noch" },
    { latin: "autem", stems: "(nachgestellt)", translation: "aber, andererseits" },
    { latin: "caelum", stems: "caelī n", translation: "der Himmel" },
    { latin: "cōgere", stems: "cōgō, coēgī, coāctum (m. Inf.)", translation: "zwingen (etw. zu tun); (ver)sammeln" },
    { latin: "cognōscere", stems: "cognōscō, cognōvī, cognitum", translation: "erkennen, kennen lernen; (Perf. auch) kennen, wissen" },
    { latin: "colere", stems: "colō, coluī, cultum", translation: "verehren; bewirtschaften, pflegen" },
    { latin: "cōnsilium", stems: "cōnsiliī n", translation: "die Beratung; der Beschluss, der Plan, der Rat" },
    { latin: "constituere", stems: "cōnstituō, cōnstituī, cōnstitūtum", translation: "aufstellen, gründen, festsetzen, beschließen" },
    { latin: "cōpia", stems: "cōpiae f", translation: "die Menge; der Vorrat; (Pl. auch) die Truppen" },
    { latin: "deus", stems: "deī m", translation: "der Gott, die Gottheit" },
    { latin: "dīcere", stems: "dīcō, dīxī, dictum", translation: "sagen, sprechen; (m. dopp. Akk.) nennen, bezeichnen (als)" },
    { latin: "dūcere", stems: "dūcō, dūxī, ductum", translation: "führen, ziehen; (m. dopp. Akk.) halten für" },
    { latin: "imperium", stems: "imperiī n", translation: "der Befehl; die Herrschaft; das Reich" },
    { latin: "invenīre", stems: "inveniō, invēnī, inventum", translation: "finden, erfinden" },
    { latin: "legere", stems: "legō, lēgī", translation: "lesen; auswählen" },
    { latin: "nātūra", stems: "nātūrae f", translation: "die Natur, das Wesen, die Beschaffenheit" },
    { latin: "neque", stems: "", translation: "und nicht, auch nicht" },
    { latin: "opera", stems: "operae f", translation: "die Arbeit, die Mühe" },
    { latin: "oppidum", stems: "oppidī n", translation: "die Stadt, die Kleinstadt" },
    { latin: "ostendere", stems: "ostendō, ostendī", translation: "zeigen, erklären" },
    { latin: "petere", stems: "petō, petīvī, petītum", translation: "bitten; verlangen; streben (nach); aufsuchen; angreifen" },
    { latin: "posteā", stems: "(Adv.)", translation: "nachher, später" },
    { latin: "quasi", stems: "(Adv.)", translation: "gleichsam, wie" },
    { latin: "resistere", stems: "resistō, restitī", translation: "Widerstand leisten; stehen bleiben" },
    { latin: "scrībere", stems: "scrībō, scrīpsī, scrīptum", translation: "schreiben, beschreiben" },
    { latin: "sine", stems: "(m. Abl.)", translation: "ohne" },
    { latin: "terra", stems: "terrae f", translation: "die Erde, das Land" },
    { latin: "verbum", stems: "verbī n", translation: "das Wort, die Äußerung" },
    { latin: "vīta", stems: "vītae f", translation: "das Leben" },
    { latin: "vīvere", stems: "vīvō, vīxī", translation: "leben" },
    { type: "lesson", number: 6 },
    { latin: "-ne?", stems: "", translation: "Fragesignal (wird nicht übersetzt)" },
    { latin: "accipere", stems: "accipiō, accēpī, acceptum", translation: "erhalten, erfahren, annehmen" },
    { latin: "apud", stems: "(m. Akk.)", translation: "bei" },
    { latin: "bonus", stems: "bona, bonum", translation: "gut; tüchtig" },
    { latin: "capere", stems: "capiō, cēpī, captum", translation: "nehmen, fassen, ergreifen, erobern" },
    { latin: "cēterī", stems: "cēterae, cētera Pl.", translation: "die übrigen" },
    { latin: "cupere", stems: "cupiō, cupīvī", translation: "wollen, wünschen, verlangen" },
    { latin: "fāma", stems: "fāmae f", translation: "der (gut/schlechte) Ruf; das Gerücht" },
    { latin: "fortūna", stems: "fortūnae f", translation: "das Glück; das Schicksal" },
    { latin: "glōria", stems: "glōriae f", translation: "der Ruhm, die Ehre" },
    { latin: "habēre", stems: "habeō, habuī", translation: "haben, halten" },
    { latin: "incipere", stems: "incipiō, coepī (incēpī), inceptum", translation: "anfangen, beginnen" },
    { latin: "inter", stems: "(m. Akk.)", translation: "unter; während; zwischen" },
    { latin: "laudāre", stems: "laudō, laudāvī, laudātum", translation: "loben" },
    { latin: "līberī", stems: "līberōrum m Pl.", translation: "die Kinder" },
    { latin: "māgnus", stems: "māgna, māgnum", translation: "groß, bedeutend" },
    { latin: "mē", stems: "(Akk.)", translation: "mich" },
    { latin: "meus", stems: "mea, meum", translation: "mein" },
    { latin: "mihī", stems: "(Dat.)", translation: "mir, für mich" },
    { latin: "miser", stems: "misera, miserum", translation: "arm, erbärmlich, unglücklich" },
    { latin: "modus", stems: "modī m", translation: "die Art, die Weise; das Maß" },
    { latin: "multus", stems: "multa, multum", translation: "viel" },
    { latin: "nūllus", stems: "nūlla, nūllum; Gen. nūllīus, Dat. nūllī", translation: "kein" },
    { latin: "parvus", stems: "parva, parvum", translation: "klein, gering" },
    { latin: "puer", stems: "puerī m", translation: "der Junge" },
    { latin: "quam", stems: "", translation: "als, wie; (m. Superlativ) möglichst" },
    { latin: "quidem", stems: "(Adv.)", translation: "freilich, gewiss, wenigstens, zwar" },
    { latin: "quis?", stems: "quid?", translation: "wer? was?" },
    { latin: "quoque", stems: "(nachgestellt)", translation: "auch" },
    { latin: "superī", stems: "superōrum m", translation: "die Götter" },
    { latin: "tē", stems: "(Akk.)", translation: "dich" },
    { latin: "templum", stems: "templī n", translation: "der Tempel" },
    { latin: "vir", stems: "virī m", translation: "der Mann" },
    { type: "lesson", number: 7 },
    { latin: "abesse", stems: "absum, āfuī", translation: "abwesend sein, fehlen" },
    { latin: "accēdere", stems: "accēdo, accessī", translation: "herbeikommen, hingehen, sich nähern" },
    { latin: "altus", stems: "alta, altum", translation: "hoch, tief" },
    { latin: "amor", stems: "amōris m", translation: "die Liebe" },
    { latin: "an", stems: "", translation: "oder (etwa)" },
    { latin: "auxilium", stems: "auxiliī n", translation: "die Hilfe" },
    { latin: "convenīre", stems: "conveniō, convēnī, conventum", translation: "zusammenkommen; zusammenpassen; (m. Akk.) treffen" },
    { latin: "emere", stems: "emō, ēmī, ēmptum", translation: "kaufen" },
    { latin: "ēripere", stems: "ēripiō, ēripuī", translation: "entreißen" },
    { latin: "fugere", stems: "fugiō, fūgī (m. Akk.)", translation: "fliehen (vor), entfliehen, meiden" },
    { latin: "igitur", stems: "", translation: "also, folglich" },
    { latin: "labor", stems: "labōris m", translation: "die Arbeit, die Mühe, die Anstrengung" },
    { latin: "lībertās", stems: "lībertātis f", translation: "die Freiheit" },
    { latin: "perīculum", stems: "perīculī n", translation: "die Gefahr" },
    { latin: "posse", stems: "possum, potuī, –", translation: "können" },
    { latin: "pulcher", stems: "pulchra, pulchrum", translation: "schön" },
    { latin: "quaerere", stems: "quaerō, quaesīvī, quaesītum", translation: "fragen; suchen; erwerben wollen" },
    { latin: "saepe", stems: "(Adv.)", translation: "oft" },
    { latin: "sī", stems: "(Subjunktion)", translation: "wenn; falls" },
    { latin: "simul", stems: "(Adv.)", translation: "gleichzeitig, zugleich" },
    { latin: "sōlus", stems: "sōla, sōlum; Gen. sōlīus, Dat. sōlī", translation: "allein, einzig" },
    { latin: "studium", stems: "studiī n", translation: "die Beschäftigung; das Engagement, das Interesse" },
    { type: "lesson", number: 8 },
    { latin: "alius", stems: "alia, aliud; Gen. alterīus, Dat. aliī", translation: "ein anderer" },
    { latin: "arma", stems: "armōrum n Pl.", translation: "die Waffen; das Gerät" },
    { latin: "cum", stems: "(m. Ind.)", translation: "als (plötzlich), (zu der Zeit) als, (immer) wenn" },
    { latin: "deinde", stems: "", translation: "dann, darauf" },
    { latin: "facere", stems: "faciō, fēcī, factum", translation: "machen, tun, handeln" },
    { latin: "malus", stems: "mala, malum", translation: "schlecht, schlimm, böse" },
    { latin: "nihil", stems: "", translation: "nichts" },
    { latin: "nisī", stems: "(Subjunktion)", translation: "wenn nicht" },
    { latin: "nōbis", stems: "(Dat.)", translation: "uns, für uns" },
    { latin: "paucī", stems: "paucae, pauca", translation: "wenige" },
    { latin: "pāx", stems: "pācis f", translation: "der Frieden" },
    { latin: "postquam", stems: "(m. Perf.) (Subjunktion)", translation: "nachdem, als" },
    { latin: "pūgnāre", stems: "pūgnō, pūgnāvī, pūgnātum", translation: "kämpfen" },
    { latin: "putāre", stems: "putō, putāvī, putātum", translation: "glauben, meinen; (m. doppeltem Akk.) halten für" },
    { latin: "quamquam", stems: "(Subjunktion)", translation: "obwohl" },
    { latin: "quia", stems: "(Subjunktion)", translation: "weil" },
    { latin: "sēcum", stems: "", translation: "mit sich, bei sich" },
    { latin: "ūnus", stems: "ūna, ūnum; Gen. ūnīus, Dat. ūnī", translation: "einer, ein einziger" },
    { latin: "vōs", stems: "", translation: "ihr (Nom.); euch (Akk.)" },
    { latin: "vōx", stems: "vōcis f", translation: "die Stimme, die Äußerung, der Laut" },
    { type: "lesson", number: 9 },
    { latin: "accidere", stems: "áccido, áccidī", translation: "geschehen, sich ereignen" },
    { latin: "alius … alius", stems: "", translation: "der eine … der andere" },
    { latin: "contendere", stems: "contendō, contendī", translation: "eilen; sich anstrengen; kämpfen; behaupten" },
    { latin: "discēdere", stems: "discēdō, discessī", translation: "weggehen, auseinandergehen" },
    { latin: "ergō", stems: "", translation: "also, deshalb" },
    { latin: "homō", stems: "hominis m", translation: "der Mensch" },
    { latin: "inde", stems: "", translation: "von dort; darauf; deshalb" },
    { latin: "manēre", stems: "maneō, mānsī (m. Akk.)", translation: "bleiben; warten (auf)" },
    { latin: "māter", stems: "mātris f", translation: "die Mutter" },
    { latin: "mōns", stems: "montis m", translation: "der Berg" },
    { latin: "mors", stems: "mortis f", translation: "der Tod" },
    { latin: "multitūdō", stems: "multitūdinis f", translation: "die Menge, die große Zahl" },
    { latin: "nōbiscum", stems: "", translation: "mit uns" },
    { latin: "nōs", stems: "", translation: "wir (Nom.); uns (Akk.)" },
    { latin: "ops", stems: "opis f", translation: "die Hilfe; die Kraft; (Pl.) die Macht, die Mittel, der Reichtum" },
    { latin: "parēns", stems: "parentis m/f", translation: "der Vater; die Mutter; (Pl.) die Eltern" },
    { latin: "pars", stems: "partis f", translation: "der Teil, die Seite" },
    { latin: "pater", stems: "patris m", translation: "der Vater" },
    { latin: "relinquere", stems: "relinquō, relīquī, relictum", translation: "verlassen, zurücklassen" },
    { latin: "rūrsus", stems: "(Adv.)", translation: "wieder" },
    { latin: "urbs", stems: "urbis f", translation: "die Stadt" },
    { latin: "vincere", stems: "vincō, vīcī, victum", translation: "siegen, besiegen, übertreffen" },
    { latin: "vōbis", stems: "(Dat.)", translation: "euch, für euch" },
    { type: "lesson", number: 10 },
    { latin: "ager", stems: "agrī m", translation: "der Acker, das Feld, das Gebiet" },
    { latin: "annus", stems: "annī m", translation: "das Jahr" },
    { latin: "ante", stems: "(Adv.)", translation: "vorher" },
    { latin: "causa", stems: "causae f", translation: "die Sache; der Grund; der Prozess" },
    { latin: "cīvitās", stems: "cīvitātis f", translation: "die Gemeinde, der Staat" },
    { latin: "committere", stems: "committō, commīsī, commissum", translation: "anvertrauen; begehen; veranstalten" },
    { latin: "cōnsistere", stems: "cōnsistō, cōnstitī", translation: "stehen bleiben, sich aufstellen" },
    { latin: "crēdere", stems: "crēdō, crēdidī", translation: "glauben; anvertrauen" },
    { latin: "dolor", stems: "dolōris m", translation: "der Schmerz" },
    { latin: "factum", stems: "factī n", translation: "die Handlung, die Tat, die Tatsache" },
    { latin: "fīlia", stems: "fīliae f", translation: "die Tochter" },
    { latin: "fīlius", stems: "fīliī m", translation: "der Sohn" },
    { latin: "frāter", stems: "frātris m", translation: "der Bruder" },
    { latin: "hīc", stems: "", translation: "hier" },
    { latin: "imperāre", stems: "imperō, imperāvī, imperātum (m. Dat.)", translation: "befehlen, herrschen (über)" },
    { latin: "īnsidiae", stems: "īnsidiārum f Pl.", translation: "die Falle, das Attentat, die Hinterlist" },
    { latin: "interficere", stems: "interficiō, interfēcī, interfectum", translation: "töten, vernichten" },
    { latin: "is", stems: "ea, id", translation: "dieser, diese, dieses; er, sie, es; (Gen.) sein, ihr" },
    { latin: "iubēre", stems: "iubeō, iussī (m. Akk.)", translation: "befehlen, beauftragen" },
    { latin: "locus", stems: "locī m", translation: "der Ort, der Platz, die Stelle" },
    { latin: "mittere", stems: "mittō, mīsī, missum", translation: "schicken, werfen" },
    { latin: "nēmō", stems: "Gen. nēminis", translation: "niemand" },
    { latin: "noster", stems: "nostra, nostrum", translation: "unser" },
    { latin: "novus", stems: "nova, novum", translation: "neu, ungewöhnlich" },
    { latin: "nox", stems: "noctis f", translation: "die Nacht" },
    { latin: "plērīque", stems: "plēraeque, plēraque", translation: "die meisten, sehr viele" },
    { latin: "praetereā", stems: "(Adv.)", translation: "außerdem" },
    { latin: "prō", stems: "(m. Abl.)", translation: "vor; anstelle von; für" },
    { latin: "quoniam", stems: "(Subjunktion)", translation: "da ja, weil ja" },
    { latin: "rēx", stems: "rēgis m", translation: "der König" },
    { type: "lesson", number: 11 },
    { latin: "agere", stems: "agō, ēgī", translation: "handeln, treiben, verhandeln" },
    { latin: "amplus", stems: "ampla, amplum", translation: "bedeutend, groß, weit" },
    { latin: "aqua", stems: "aquae f", translation: "das Wasser" },
    { latin: "castra", stems: "castrōrum n Pl.", translation: "das Lager" },
    { latin: "clārus", stems: "clāra, clārum", translation: "hell, klar, berühmt" },
    { latin: "contrā", stems: "(m. Akk.)", translation: "gegen" },
    { latin: "cūra", stems: "cūrae f", translation: "die Sorge; die Sorgfalt" },
    { latin: "dēfendere", stems: "dēfendō, dēfendī, dēfēnsum (ā m. Abl.)", translation: "abwehren; verteidigen (vor/gegen)" },
    { latin: "exemplum", stems: "exemplī n", translation: "das Beispiel, das Vorbild" },
    { latin: "fīnis", stems: "fīnis m", translation: "das Ende; die Grenze; das Ziel, der Zweck; (Pl.) das Gebiet" },
    { latin: "hostis", stems: "hostis m", translation: "der Feind, der Landesfeind" },
    { latin: "inquam", stems: "3. P. Sg. inquit", translation: "sage ich, sagte ich" },
    { latin: "lacrima", stems: "lacrimae f", translation: "die Träne" },
    { latin: "lēx", stems: "lēgis f", translation: "das Gesetz; die Bedingung" },
    { latin: "lūx", stems: "lūcis f", translation: "das Licht, das Tageslicht" },
    { latin: "malum", stems: "malī n", translation: "das Leid, das Übel, das Unglück" },
    { latin: "mīles", stems: "mīlitis m", translation: "der Soldat" },
    { latin: "numerus", stems: "numerī m", translation: "die Zahl, die Menge" },
    { latin: "obses", stems: "obsidis m/f", translation: "die Geisel" },
    { latin: "patria", stems: "patriae f", translation: "die Heimat" },
    { latin: "pervenīre", stems: "perveniō, pervēnī (ad/in m. Akk.)", translation: "kommen zu/nach" },
    { latin: "pōnere", stems: "pōnō, posuī, positum", translation: "(auf)stellen, (hin)legen, setzen" },
    { latin: "praesidium", stems: "praesidii n", translation: "der Schutz; die Hilfe; der Wachposten; die Schutztruppe" },
    { latin: "premere", stems: "premō, pressī, pressum", translation: "drücken; unterdrücken, bedrängen" },
    { latin: "prīmum", stems: "(Adv.)", translation: "erstens, zuerst, zum ersten Mal" },
    { latin: "prīmus", stems: "prīma, prīmum", translation: "der erste" },
    { latin: "quī", stems: "quae, quod", translation: "der, die, das; welcher, welche, welches; (am Satzanfang:) dieser, diese, dieses; (ohne Bw:) wer, was" },
    { latin: "servāre", stems: "servō, servāvī, servātum", translation: "retten, bewahren; beobachten" },
    { latin: "summus", stems: "summa, summum", translation: "der höchste, oberste, letzte" },
    { latin: "suus", stems: "sua, suum", translation: "sein, ihr" },
    { latin: "tēlum", stems: "tēlī n", translation: "die Waffe, das Geschoss" },
    { latin: "tūtus", stems: "tūta, tūtum", translation: "sicher" },
    { latin: "ūllus", stems: "ūlla, ūllum", translation: "irgendeiner, irgendeine, irgendein" },
    { latin: "vester", stems: "vestra, vestrum", translation: "euer" },
    { latin: "victor", stems: "victōris m", translation: "der Sieger, (adj.) siegreich" },
    { latin: "virgō", stems: "virginis f", translation: "das Mädchen, die junge Frau" },
    { latin: "virtūs", stems: "virtūtis f", translation: "die Tapferkeit, die Tüchtigkeit, die Vortrefflichkeit; die Leistung" },
    { type: "lesson", number: 12 },
    { latin: "abīre", stems: "abeō, abiī", translation: "weggehen" },
    { latin: "addūcere", stems: "addūcō, addūxī, adductum", translation: "heranführen, veranlassen, beeinflussen" },
    { latin: "adīre", stems: "adeō, adiī", translation: "herantreten (an), hingehen (zu), aufsuchen; auf sich nehmen; angreifen" },
    { latin: "bellum", stems: "bellī n", translation: "der Krieg" },
    { latin: "celer", stems: "celeris, celere", translation: "schnell" },
    { latin: "cīvis", stems: "cīvis m", translation: "der Bürger" },
    { latin: "commūnis", stems: "commūnis, commūne", translation: "gemeinsam, allgemein" },
    { latin: "exīstimāre", stems: "exīstimō, exīstimāvī, exīstimātum", translation: "meinen; schätzen" },
    { latin: "facilis", stems: "facilis, facile", translation: "leicht (zu tun)" },
    { latin: "fortis", stems: "fortis, forte", translation: "kräftig; tapfer" },
    { latin: "gerere", stems: "gerō, gessī", translation: "führen, ausführen; tragen" },
    { latin: "gravis", stems: "gravis, grave", translation: "schwer" },
    { latin: "haud", stems: "", translation: "nicht" },
    { latin: "hinc", stems: "", translation: "von hier; hierauf" },
    { latin: "imperātor", stems: "imperātōris m", translation: "der Feldherr; der Kaiser" },
    { latin: "ingēns", stems: "Gen. ingentis", translation: "gewaltig, riesig, ungeheuer" },
    { latin: "īre", stems: "eō, iī", translation: "gehen" },
    { latin: "legiō", stems: "legiōnis f", translation: "die Legion" },
    { latin: "nōscere", stems: "nōsco, nōvī", translation: "erkennen, kennenlernen" },
    { latin: "numquam", stems: "", translation: "nie, niemals" },
    { latin: "omnis", stems: "omnis, omne", translation: "jeder, ganz; (Pl.) alle" },
    { latin: "pār", stems: "Gen. pāris", translation: "gleich, ebenbürtig" },
    { latin: "perīre", stems: "pereō, periī", translation: "umkommen, zugrunde gehen" },
    { latin: "placet", stems: "placuīt (m. Dat.)", translation: "es gefällt jmdm., jmd. beschließt" },
    { latin: "plūrimī", stems: "plūrimae, plūrima", translation: "die meisten, sehr viele" },
    { latin: "potestās", stems: "potestātis f", translation: "die Macht, die Gewalt, die Amtsgewalt" },
    { latin: "proelium", stems: "proeliī n", translation: "der Kampf, die Schlacht" },
    { latin: "ratiō", stems: "ratiōnis f", translation: "der Grund; die Vernunft; die Überlegung; die Art und Weise" },
    { latin: "redīre", stems: "redeō, rediī", translation: "zurückgehen, zurückkehren" },
    { latin: "reliquus", stems: "reliqua, reliquum", translation: "übrig; künftig" },
    { latin: "salūs", stems: "salūtis f", translation: "die Gesundheit; die Rettung; das Glück; der Gruß" },
    { latin: "sē", stems: "(Akk./Abl.)", translation: "sich" },
    { latin: "sibi", stems: "(Dat.)", translation: "sich, für sich" },
    { latin: "similis", stems: "similis, simile (m. Gen./Dat.)", translation: "ähnlich" },
    { latin: "vīs", stems: "Akk. vim, Abl. vī f; Pl. vīrēs, vīrium", translation: "die Kraft, die Gewalt; die Menge; (Pl.) die Kräfte, die Streitkräfte" },
    { type: "lesson", number: 13 },
    { latin: "aedis", stems: "aedis f", translation: "der Tempel; (Pl.) das Haus" },
    { latin: "auctōritās", stems: "auctōritātis f", translation: "das Ansehen, der Einfluss, die Macht" },
    { latin: "certus", stems: "certa, certum", translation: "sicher" },
    { latin: "diēs", stems: "diēī m", translation: "der Tag" },
    { latin: "fidēs", stems: "fideī f", translation: "der Glaube; die Treue; das Vertrauen; die Zuverlässigkeit" },
    { latin: "honor/honōs", stems: "honōris m", translation: "die Ehre; das Ehrenamt" },
    { latin: "īgnis", stems: "īgnis m (Abl. ignī)", translation: "das Feuer" },
    { latin: "intellegere", stems: "intellegō, intellēxī", translation: "merken, bemerken, verstehen, begreifen" },
    { latin: "invidia", stems: "invidiae f", translation: "der Neid; der Hass" },
    { latin: "licet", stems: "licuit", translation: "es ist erlaubt, es ist möglich" },
    { latin: "māgnitūdō", stems: "māgnitūdinis f", translation: "die Größe" },
    { latin: "mēns", stems: "mentis f", translation: "der Geist, der Sinn, der Verstand; die Meinung" },
    { latin: "neque … neque", stems: "", translation: "weder … noch" },
    { latin: "regiō", stems: "regiōnis f", translation: "das Gebiet, die Gegend; die Richtung" },
    { latin: "rēs", stems: "reī f", translation: "die Sache, das Ding, die Angelegenheit" },
    { latin: "rēs pūblica", stems: "reī pūblicae f", translation: "der Staat" },
    { latin: "sīgnum", stems: "sīgnī n", translation: "das Zeichen; das Merkmal; der Beweis" },
    { latin: "sōl", stems: "sōlis m", translation: "die Sonne" },
    { latin: "spēs", stems: "speī f", translation: "die Hoffnung, die Erwartung" },
    { latin: "tam", stems: "", translation: "so" },
    { latin: "tantum", stems: "(Adv.) (nachgestellt)", translation: "nur" },
    { latin: "trādere", stems: "trādō, trādidī, trāditum", translation: "übergeben, ausliefern" },
    { latin: "trahere", stems: "trahō, trāxī, tractum", translation: "ziehen, schleppen" },
    { latin: "tuus", stems: "tua, tuum", translation: "dein" },
    { latin: "ubī", stems: "(m. Perf.) (Subjunktion)", translation: "sobald" },
    { latin: "vērō", stems: "(Adv.)", translation: "aber, in der Tat, wirklich" },
    { latin: "vērus", stems: "vēra, vērum", translation: "echt, richtig, wahr" },
    { type: "lesson", number: 14 },
    { latin: "ac/atque", stems: "", translation: "und, und auch; (im Vergleich) wie, als" },
    { latin: "aetās", stems: "aetātis f", translation: "die Zeit, das Zeitalter, die Lebenszeit" },
    { latin: "āmittere", stems: "āmittō, āmīsī, āmissum", translation: "verlieren" },
    { latin: "classis", stems: "classis f", translation: "die Flotte; die Abteilung" },
    { latin: "dux", stems: "ducis m/f", translation: "der Anführer, die Anführerin" },
    { latin: "fātum", stems: "fātī n", translation: "das Schicksal; der Götterspruch" },
    { latin: "gēns", stems: "gentis f", translation: "der Stamm; die Familie; das Volk" },
    { latin: "genus", stems: "generis n", translation: "das Geschlecht; die Art; die Abstammung" },
    { latin: "iter", stems: "itineris n", translation: "die Reise, der Weg, der Marsch" },
    { latin: "lītus", stems: "lītoris n", translation: "die Küste, der Strand" },
    { latin: "longus", stems: "longa, longum", translation: "lang, weit" },
    { latin: "nāvis", stems: "nāvis f", translation: "das Schiff" },
    { latin: "nōmen", stems: "nōminis n", translation: "der Name" },
    { latin: "officium", stems: "officiī n", translation: "der Dienst; die Pflicht; das Pflichtgefühl" },
    { latin: "opus", stems: "operis n", translation: "das Werk; die Arbeit; die Tat" },
    { latin: "orbis", stems: "orbis m", translation: "der Kreis(lauf); der Erdkreis, die Welt" },
    { latin: "prīnceps", stems: "prīncipis m", translation: "der erste Mann, der führende Mann; der Kaiser" },
    { latin: "quō", stems: "", translation: "wohin?" },
    { latin: "quod", stems: "(Subjunktion)", translation: "dass, weil" },
    { latin: "scelus", stems: "sceleris n", translation: "das Verbrechen" },
    { latin: "sīc", stems: "(Adv.)", translation: "so" },
    { latin: "tempus", stems: "temporis n", translation: "die Zeit; die günstige Zeit; die Umstände" },
    { latin: "uxor", stems: "uxōris f", translation: "die Ehefrau, die Gattin" },
    { latin: "ventus", stems: "ventī m", translation: "der Wind" },
    { type: "lesson", number: 15 },
    { latin: "corpus", stems: "corporis n", translation: "der Körper; der Leichnam" },
    { latin: "duo", stems: "duae, duo", translation: "zwei" },
    { latin: "eō", stems: "", translation: "dorthin; deswegen" },
    { latin: "flūmen", stems: "flūminis n", translation: "der Fluss" },
    { latin: "laus", stems: "laudis f", translation: "das Lob; der Ruhm" },
    { latin: "mare", stems: "maris n; Abl. Sg. marī, Nom./Akk. Pl. maria, Gen. Pl. marium", translation: "das Meer" },
    { latin: "mulier", stems: "mulíeris f", translation: "die Frau" },
    { latin: "mūnus", stems: "mūneris n", translation: "die Aufgabe; das Geschenk" },
    { latin: "nōbilis", stems: "nōbilis, nōbile", translation: "adlig, vornehm; berühmt" },
    { latin: "pectus", stems: "pectoris n", translation: "die Brust; das Herz" },
    { latin: "recipere", stems: "recipiō, recēpī, receptum", translation: "aufnehmen; wiederbekommen, zurücknehmen" },
    { latin: "reddere", stems: "reddō, reddidī, redditum", translation: "zurückgeben, geben; (m. doppeltem Akk.) jmdn. zu etw. machen" },
    { latin: "tālis", stems: "tālis, tāle", translation: "derartig, ein solcher, so (beschaffen)" },
    { latin: "ut", stems: "(m. Ind.) (Subjunktion)", translation: "sobald; sooft" },
    { type: "lesson", number: 16 },
    { latin: "aliēnus", stems: "aliēna, aliēnum", translation: "fremd" },
    { latin: "auferre", stems: "auferō, abstulī, ablātum", translation: "wegbringen, rauben" },
    { latin: "cāsus", stems: "cāsūs m", translation: "der Fall; der Zufall" },
    { latin: "complūrēs", stems: "complūrēs, complūra Pl.", translation: "mehrere" },
    { latin: "cōnferre", stems: "cōnferō, contulī, collātum", translation: "zusammentragen; vergleichen" },
    { latin: "cōnsul", stems: "cōnsulis m", translation: "der Konsul" },
    { latin: "dīgnus", stems: "dīgna, dīgnum (m. Abl.)", translation: "würdig, wert (einer Sache)" },
    { latin: "exercitus", stems: "exercitūs m", translation: "das Heer" },
    { latin: "facinus", stems: "facinoris n", translation: "die Handlung, die Untat" },
    { latin: "ferre", stems: "ferō, tulī, lātum", translation: "bringen, tragen; ertragen" },
    { latin: "inferre", stems: "inferō, intulī, illātum", translation: "hineintragen, zufügen" },
    { latin: "ingenium", stems: "ingeniī n", translation: "die Begabung, das Talent; der Verstand" },
    { latin: "male", stems: "(Adv.)", translation: "schlecht, schlimm" },
    { latin: "metus", stems: "metūs m", translation: "die Angst, die Furcht" },
    { latin: "mōs", stems: "mōris m", translation: "der Brauch, die Sitte; (Pl.) der Charakter" },
    { latin: "nec", stems: "(= neque)", translation: "und nicht, auch nicht" },
    { latin: "referre", stems: "referō, rettulī, relātum", translation: "(zurück)bringen; berichten" },
    { latin: "rēgnum", stems: "rēgnī n", translation: "die Herrschaft, die Königsherrschaft; das Reich" },
    { latin: "senātus", stems: "senātūs m", translation: "der Senat, die Senatsversammlung" },
    { latin: "statuere", stems: "statuō, statuī, statūtum", translation: "aufstellen; beschließen, festsetzen" },
    { latin: "ūsus", stems: "ūsūs m", translation: "der Nutzen, die Benutzung, die Ausübung" },
    { type: "lesson", number: 17 },
    { latin: "domus", stems: "domūs f", translation: "das Haus" },
    { latin: "hic", stems: "haec, hoc", translation: "dieser, diese, dieses (hier); folgender" },
    { latin: "ille", stems: "illa, illud", translation: "jener, jene, jenes; der, die, das (dort); damalig, berühmt" },
    { latin: "litterae", stems: "litterārum f Pl.", translation: "der Brief; die Literatur; die Wissenschaften; (Sg.) der Buchstabe" },
    { latin: "pēs", stems: "pedis m", translation: "der Fuß" },
    { latin: "pūblicus", stems: "pūblica, pūblicum", translation: "öffentlich, staatlich" },
    { latin: "ut", stems: "(beim Vergleich)", translation: "wie" },
    { type: "lesson", number: 18 },
    { latin: "aciēs", stems: "aciēī f", translation: "die Schärfe; die Schlacht; das Heer" },
    { latin: "bárbarus", stems: "bárbara, bárbarum", translation: "ausländisch, unzivilisiert; (Subst.) der Barbar" },
    { latin: "crīmen", stems: "crīminis n", translation: "das Verbrechen; der Vorwurf" },
    { latin: "īdem", stems: "eadem, idem", translation: "derselbe; der gleiche" },
    { latin: "iste", stems: "ista, istud; Gen. istīus, Dat. istī", translation: "dieser, diese, dieses (da)" },
    { latin: "nihil nisī", stems: "", translation: "nichts als, nur" },
    { latin: "oportet", stems: "oportuit (m. Inf.)", translation: "es gehört sich, es ist nötig" },
    { latin: "religiō", stems: "religiōnis f", translation: "der Glaube, die (Gottes-)Verehrung, die Frömmigkeit; die Gewissenhaftigkeit" },
    { latin: "vetus", stems: "Gen. veteris", translation: "alt" },
    { type: "lesson", number: 19 },
    { latin: "cum", stems: "(m. Konj.)", translation: "als, nachdem; weil; obwohl; während (dagegen)" },
    { latin: "item", stems: "", translation: "ebenso, gleichfalls" },
    { latin: "iūdicāre", stems: "", translation: "urteilen, beurteilen" },
    { latin: "iūs", stems: "iūris n", translation: "das Recht" },
    { latin: "nūntiāre", stems: "nūntiō, nūntiāvī, nūntiātum", translation: "melden" },
    { latin: "occupare", stems: "occupō, occupāvī, occupātum", translation: "besetzen, einnehmen" },
    { latin: "prōvincia", stems: "prōvinciae f", translation: "die Provinz" },
    { latin: "supplicium", stems: "suppliciī n", translation: "die Hinrichtung; die Strafe; das flehentliche Bitten" },
    { type: "lesson", number: 20 },
    { latin: "adeō", stems: "", translation: "so sehr" },
    { latin: "caput", stems: "capitis n", translation: "der Kopf; die Hauptstadt" },
    { latin: "istīc", stems: "", translation: "da, dort" },
    { latin: "manus", stems: "manūs f", translation: "die Hand, die Schar (von Bewaffneten)" },
    { latin: "nē", stems: "(m. Konj.) (Subjunktion)", translation: "dass nicht; damit nicht; (nach Ausdrücken des Fürchtens) dass" },
    { latin: "solvere", stems: "solvō, solvī, solūtum", translation: "lösen, auflösen; bezahlen" },
    { latin: "sūmere", stems: "sūmō, sūmpsī, sūmptum", translation: "nehmen" },
    { latin: "ut", stems: "(m. Konj.) (Subjunktion)", translation: "dass; sodass; damit, um ... zu" },
    { type: "lesson", number: 21 },
    { latin: "agmen", stems: "agminis n", translation: "der Heereszug, der Trupp" },
    { latin: "āiō", stems: "ait, āiunt", translation: "behaupte(te) ich, sag(t)e ich" },
    { latin: "eques", stems: "equitis m", translation: "der Reiter, der Ritter" },
    { latin: "-ne", stems: "(im indirekten Fragesatz)", translation: "ob" },
    { latin: "ōrātiō", stems: "ōrātiōnis f", translation: "die Rede" },
    { latin: "propius", stems: "(Adv.)", translation: "näher" },
    { latin: "quīdam", stems: "quaedam, quoddam (adj.)", translation: "ein gewisser, (irgend)ein; (Pl.) einige" },
    { latin: "quīdam", stems: "quaedam, quiddam (subst.)", translation: "ein gewisser, (irgend)einer; (Pl.) einige" },
    { latin: "sub", stems: "(m. Abl.)", translation: "unten an, unten bei, unter (wo?)" },
    { latin: "tōtus", stems: "tōta, tōtum; Gen. tōtīus, Dat. tōtī", translation: "ganz" },
    { latin: "unde", stems: "", translation: "woher, von wo?" },
    { latin: "vulnus", stems: "vulneris n", translation: "die Wunde; der (militärische) Verlust" },
    { type: "lesson", number: 22 },
    { latin: "adventus", stems: "adventūs m", translation: "die Ankunft" },
    { latin: "aut", stems: "", translation: "oder" },
    { latin: "aut … aut", stems: "", translation: "entweder … oder" },
    { latin: "ferrum", stems: "ferrī n", translation: "das Eisen; die Waffe" },
    { latin: "impetus", stems: "impetūs m", translation: "der Angriff; der Schwung" },
    { latin: "ipse", stems: "ipsa, ipsum; Gen. ipsīus, Dat. ipsī", translation: "(er, sie, es) selbst, persönlich, gerade, sogar" },
    { latin: "lēgātus", stems: "lēgātī m", translation: "der Gesandte, der Bevollmächtigte" },
    { latin: "līber", stems: "lībera, līberum", translation: "frei" },
    { latin: "nē", stems: "(m. Konj.) (im Hauptsatz)", translation: "nicht (verneinter Befehl oder Wunsch)" },
    { latin: "ōrdō", stems: "ōrdinis m", translation: "die Ordnung; die Reihe; der Stand" },
    { latin: "plūs", stems: "Gen. plūris", translation: "mehr" },
    { latin: "potius", stems: "(Adv.)", translation: "eher, lieber" },
    { latin: "praetor", stems: "praetoris m", translation: "der Prätor" },
    { latin: "sanguis", stems: "sanguinis m", translation: "das Blut" },
    { latin: "tollere", stems: "tollō, sústulī, sublātum", translation: "aufheben, in die Höhe heben; wegnehmen" },
    { latin: "trānsīre", stems: "trānseō, trānsiī, trānsitum", translation: "durchqueren; überschreiten" },
    { type: "lesson", number: 23 },
    { latin: "causā", stems: "(m. Gen.; nachgestellt)", translation: "wegen; um … zu" },
    { latin: "loquī", stems: "loquor, locūtus sum", translation: "reden, sprechen" },
    { latin: "magis", stems: "", translation: "mehr, eher" },
    { latin: "nāscī", stems: "nāscor, nātus sum", translation: "entstehen, geboren werden" },
    { latin: "proficīscī", stems: "proficīscor, profectus sum", translation: "reisen, abreisen, aufbrechen" },
    { latin: "querī", stems: "queor, questus sum (m. Akk.)", translation: "klagen, sich beklagen (über)" },
    { latin: "sequī", stems: "sequor, secūtus sum (m. Akk.)", translation: "(jmdm.) folgen" },
    { latin: "tantus", stems: "tanta, tantum", translation: "so groß, so viel" },
    { latin: "tot", stems: "(indekl.)", translation: "so viel" },
    { latin: "ūtī", stems: "ūtor, ūsus sum (m. Abl.)", translation: "(etw.) benutzen, gebrauchen" },
    { type: "lesson", number: 24 },
    { latin: "aequus", stems: "aequa, aequum", translation: "eben, gerecht, gleich" },
    { latin: "alter", stems: "altera, alterum; Gen. alterīus, Dat. alterī", translation: "der eine / der andere (von zweien)" },
    { latin: "quīn", stems: "(Subjunktion mit Konjunktiv)", translation: "dass (in festen Wendungen)" },
    { latin: "quisquam", stems: "quidquam (oder quicquam)", translation: "irgendjemand, irgendetwas" },
    { latin: "rēctus", stems: "rēcta, rēctum", translation: "richtig, recht; gerade" },
    { latin: "solēre", stems: "soleō, solitus sum", translation: "gewohnt sein, gewöhnlich etw. tun" },
    { type: "lesson", number: 25 },
    { latin: "iūdex", stems: "iūdicis m", translation: "der Richter" },
    { latin: "iūdicium", stems: "iūdiciī n", translation: "das Urteil; das Gericht" },
    { latin: "praeter", stems: "(m. Akk.)", translation: "außer" },
    { latin: "quīn", stems: "(im Hauptsatz)", translation: "vielmehr; warum nicht" },
    { latin: "senex", stems: "senis m", translation: "der Greis, der alte Mann" },
    { latin: "ultimus", stems: "ultima, ultimum", translation: "der äußerste, entfernteste, letzte" },
    { latin: "vultus", stems: "vultūs m", translation: "das Gesicht, der Gesichtsausdruck; (Pl.) die Gesichtszüge" },
    { type: "lesson", number: 26 },
    { latin: "fierī", stems: "fīō, factus sum", translation: "gemacht werden, geschehen, werden" },
    { latin: "trēs", stems: "trēs, tria", translation: "drei" },
    { type: "lesson", number: 27 },
    { latin: "aurum", stems: "aurī n", translation: "das Gold" },
    { latin: "modo", stems: "(Adv.)", translation: "eben (noch), nur" },
    { latin: "parum", stems: "", translation: "(zu) wenig" },
    { latin: "quō", stems: "(m. Komparativ)", translation: "(= ut eo) damit umso" },
    { latin: "verum", stems: "(Adv.)", translation: "aber, sondern" },
    { type: "lesson", number: 28 },
    { latin: "aliquis", stems: "aliquis, aliquid", translation: "jemand, irgendjemand" },
    { latin: "amīcitia", stems: "amīcitiae f", translation: "die Freundschaft" },
    { latin: "arbitrāri", stems: "arbitror, arbitrātus sum", translation: "glauben, meinen" },
    { latin: "equitātus", stems: "equitātūs m", translation: "die Reiterei" },
    { latin: "frūmentum", stems: "frūmentī n", translation: "das Getreide" },
    { latin: "morī", stems: "morior, mortuus sum", translation: "sterben" },
    { latin: "patī", stems: "patior, passus sum", translation: "leiden, erleiden, ertragen, zulassen" },
    { latin: "pollicērī", stems: "polliceor, pollicitus sum", translation: "versprechen" },
    { latin: "quantus", stems: "quanta, quantum", translation: "wie groß, wie viel" },
    { latin: "vidēri", stems: "videor, vīsus sum (m. Inf.)", translation: "scheinen, gelten (als)" },
    { type: "lesson", number: 29 },
    { latin: "ob", stems: "(m. Akk.)", translation: "wegen" },
    { latin: "vel", stems: "", translation: "oder; sogar" },
    { type: "lesson", number: 30 },
    { latin: "liber", stems: "librī m", translation: "das Buch" },
    { latin: "medius", stems: "media, medium", translation: "der mittlere, in der Mitte (von)" },
    { latin: "orīrī", stems: "orior, ortus sum", translation: "entstehen, sich erheben" },
    { latin: "ōs", stems: "ōris n", translation: "der Mund; das Gesicht" },
    { latin: "quasi", stems: "(Subjunktion mit Konjunktiv)", translation: "wie wenn, als ob" },
    { latin: "quisque", stems: "quidque (subst.)", translation: "jeder" },
    { latin: "simul", stems: "(mit Perf.) (Subjunktion)", translation: "sobald" },
    { latin: "uterque", stems: "utraque, utrumque; Gen. utrīusque, Dat. utrīque", translation: "beide, jeder (von zweien)" }
];

let selectedWordObj = null; // Speichert das aktuelle Wort-Objekt
let lastWord = ""; // Speichert das zuletzt verwendete Wort
let guessedLetters = [];
let timeElapsed = 0;
let timerInterval;
let mistakes = 0;
let gameEnded = false; // Neuer Zustand, um das Spielende zu verfolgen
let wins = 0; // Counter für gewonnene Spiele
let losses = 0; // Counter für verlorene Spiele

const hangmanSvg = document.getElementById("hangman-svg");
const wordDisplay = document.getElementById("word-display");
const lettersDiv = document.getElementById("letters");
const messageDiv = document.getElementById("message");
const translationDiv = document.getElementById("translation");
const timerDiv = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");
const winsSpan = document.getElementById("wins"); // Counter für gewonnene Spiele
const lossesSpan = document.getElementById("losses"); // Counter für verlorene Spiele

const hangmanParts = [
    { id: "gallows", draw: (svg) => drawLine(svg, 50, 220, 150, 220) }, // Galgenbasis
    { id: "pole", draw: (svg) => drawLine(svg, 100, 220, 100, 50) },   // Galgenstange
    { id: "beam", draw: (svg) => drawLine(svg, 100, 50, 150, 50) },    // Galgenbalken
    { id: "rope", draw: (svg) => drawLine(svg, 150, 50, 150, 70) },   // Seil
    { id: "head", draw: (svg) => drawCircle(svg, 150, 90, 20) },       // Kopf
    { id: "body", draw: (svg) => drawLine(svg, 150, 110, 150, 170) }, // Körper
    { id: "left-arm", draw: (svg) => drawLine(svg, 150, 130, 120, 150) }, // Linker Arm
    { id: "right-arm", draw: (svg) => drawLine(svg, 150, 130, 180, 150) }, // Rechter Arm
    { id: "left-leg", draw: (svg) => drawLine(svg, 150, 170, 120, 200) },  // Linkes Bein
    { id: "right-leg", draw: (svg) => drawLine(svg, 150, 170, 180, 200) }  // Rechtes Bein
];

function init() {
    selectedWordObj = getRandomWord(); // Zufälliges Wort-Objekt auswählen
    guessedLetters = [];
    mistakes = 0;
    timeElapsed = 0;
    gameEnded = false; // Spielzustand zurücksetzen
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateWordDisplay();
    createLetterButtons();
    updateHangmanDisplay();
    messageDiv.textContent = "";
    translationDiv.textContent = ""; // Deutsche Bedeutung zurücksetzen
    timerDiv.textContent = `Verstrichene Zeit: ${timeElapsed}s`;
    resetHangman();
}

function getRandomWord() {
    let newWordObj;
    do {
        const randomIndex = Math.floor(Math.random() * vocabulary.length);
        const vocab = vocabulary[randomIndex];
        if (vocab.type !== "lesson") {
            newWordObj = {
                word: vocab.latin.toUpperCase(),
                translation: vocab.translation
            };
        }
    } while (!newWordObj || newWordObj.word === lastWord); // Wiederhole, bis ein anderes Wort ausgewählt wird
    lastWord = newWordObj.word; // Speichere das neue Wort als zuletzt verwendet
    return newWordObj;
}

function updateWordDisplay() {
    wordDisplay.textContent = selectedWordObj.word
        .split("")
        .map(letter => guessedLetters.includes(letter) ? letter : "_")
        .join(" ");
}

function createLetterButtons() {
    lettersDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.textContent = letter;
        button.classList.add("letter-button");
        button.addEventListener("click", () => guessLetter(letter, button));
        if (gameEnded || guessedLetters.includes(letter)) {
            button.disabled = true; // Buttons deaktivieren, wenn das Spiel beendet ist oder der Buchstabe bereits geraten wurde
        }
        lettersDiv.appendChild(button);
    }
}

function guessLetter(letter, button) {
    if (!guessedLetters.includes(letter) && !gameEnded) {
        guessedLetters.push(letter);
        button.disabled = true; // Deaktiviere den Button nach dem Klicken
        if (!selectedWordObj.word.includes(letter)) {
            mistakes++;
            updateHangmanDisplay();
        }
        updateWordDisplay();
        checkGameStatus();
    }
}

function updateHangmanDisplay() {
    if (mistakes > 0 && mistakes <= hangmanParts.length) {
        hangmanParts[mistakes - 1].draw(hangmanSvg);
    }
}

function resetHangman() {
    hangmanSvg.innerHTML = ""; // SVG leeren
}

function checkGameStatus() {
    if (selectedWordObj.word.split("").every(letter => guessedLetters.includes(letter))) {
        messageDiv.textContent = "Gewonnen!";
        translationDiv.textContent = `Deutsche Bedeutung: ${selectedWordObj.translation}`; // Deutsche Bedeutung anzeigen
        wins++; // Gewonnen-Counter erhöhen
        winsSpan.textContent = wins; // Gewonnen-Counter aktualisieren
        gameEnded = true; // Spiel beenden
        clearInterval(timerInterval);
        disableLetterButtons();
    } else if (mistakes >= hangmanParts.length) {
        messageDiv.textContent = `Verloren! Das Wort war: ${selectedWordObj.word}`;
        translationDiv.textContent = `Deutsche Bedeutung: ${selectedWordObj.translation}`; // Deutsche Bedeutung anzeigen
        losses++; // Verloren-Counter erhöhen
        lossesSpan.textContent = losses; // Verloren-Counter aktualisieren
        gameEnded = true; // Spiel beenden
        clearInterval(timerInterval);
        disableLetterButtons();
    }
}

function disableLetterButtons() {
    const buttons = document.querySelectorAll(".letter-button");
    buttons.forEach(button => {
        button.disabled = true; // Alle Buttons deaktivieren
    });
}

function updateTimer() {
    if (!gameEnded) {
        timeElapsed++;
        timerDiv.textContent = `Verstrichene Zeit: ${timeElapsed}s`;
    }
}

function drawLine(svg, x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
}

function drawCircle(svg, cx, cy, r) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "2");
    circle.setAttribute("fill", "transparent");
    svg.appendChild(circle);
}

resetButton.addEventListener("click", init);

init();
