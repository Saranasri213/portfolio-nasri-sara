/*!
 * Bibliothèque JavaScript jQuery v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation et autres contributeurs
 * Publié sous licence MIT
 * https://jquery.org/license
 *
 * Date : 2023-08-28T13:37Z
 */
( fonction (globale, usine) {

	« utiliser strict » ;

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// Pour les environnements CommonJS et de type CommonJS où une « fenêtre » appropriée
		// est présent, exécute la fabrique et récupère jQuery.
		// Pour les environnements qui n'ont pas de `fenêtre` avec un `document`
		// (comme Node.js), expose une usine sous le nom module.exports.
		// Cela accentue la nécessité de créer une véritable `fenêtre`.
		// par exemple var jQuery = require("jquery")(window);
		// Voir le ticket trac-14549 pour plus d'informations.
		module.exports = global.document ?
			usine (globale, vrai) :
			fonction( w ) {
				si ( !w.document ) {
					throw new Error( "jQuery nécessite une fenêtre avec un document" );
				}
				retourner l'usine ( w );
			} ;
	} autre {
		usine (globale);
	}

// Passe ceci si la fenêtre n'est pas encore définie
} )( type de fenêtre !== "non défini" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <= 18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lève des exceptions lorsque du code non strict (par exemple, ASP.NET 4.5) accède au mode strict
// arguments.callee.caller (trac-13335). Mais depuis jQuery 3.0 (2016), le mode strict devrait être courant
// suffisamment pour que toutes ces tentatives soient gardées dans un bloc try.
« utiliser strict » ;

vararr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? fonction (tableau) {
	return arr.flat.call( tableau );
} : fonction( tableau ) {
	return arr.concat.apply( [], tableau );
} ;


var push = arr.push;

var indexOf = arr.indexOf;

var classe2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Objet );

support var = {} ;

var estFonction = fonction estFonction( obj ) {

		// Prise en charge : Chrome <=57, Firefox <=52
		// Dans certains navigateurs, typeof renvoie "function" pour les éléments HTML <object>
		// (c'est-à-dire `typeof document.createElement( "object" ) === "function"`).
		// Nous ne voulons classifier *n'importe quel* nœud DOM en tant que fonction.
		// Support : QtWeb <=3.8.5, WebKit <=534.34, outil wkhtmltopdf <=0.12.5
		// Plus pour l'ancien WebKit, typeof renvoie "function" pour les collections HTML
		// (par exemple, `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			type d'obj.item !== "fonction";
	} ;


var estFenêtre = fonction estFenêtre( obj ) {
		return obj != null && obj === obj.window;
	} ;


var document = fenêtre.document;



	var préservéScriptAttributes = {
		tapez : vrai,
		src : vrai,
		occasionnel : vrai,
		noModule : vrai
	} ;

	fonction DOMEval( code, nœud, doc ) {
		doc = doc || document;

		var je, val,
			script = doc.createElement( "script" );

		script.text = code ;
		si ( nœud ) {
			pour ( i dansPreservedScriptAttributes ) {

				// Prise en charge : Firefox 64+, Edge 18+
				// Certains navigateurs ne prennent pas en charge la propriété "nonce" sur les scripts.
				// D'un autre côté, utiliser simplement `getAttribute` ne suffit pas car
				// l'attribut `nonce` est réinitialisé à une chaîne vide chaque fois qu'il
				// devient connecté au contexte de navigation.
				// Voir https://github.com/whatwg/html/issues/2369
				// Voir https://html.spec.whatwg.org/#nonce-attributes
				// La vérification `node.getAttribute` a été ajoutée pour le bien de
				// `jQuery.globalEval` pour qu'il puisse simuler un nœud non contenant
				// via un objet.
				val = nœud[ je ] || node.getAttribute && node.getAttribute( i );
				si ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


fonction toType( obj ) {
	si ( obj == null ) {
		retourner obj + "" ;
	}

	// Support : Android <=2.3 uniquement (RegExp fonctionnel)
	return typeof obj === "objet" || type d'obj === "fonction" ?
		class2type[ toString.call( obj ) ] || "objet" :
		type d'objet;
}
/* Symbole global */
// Définir ce global dans .eslintrc.json créerait un danger d'utilisation du global
// non gardé ailleurs, il semble plus sûr de définir global uniquement pour ce module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Définir une copie locale de jQuery
	jQuery = fonction (sélecteur, contexte) {

		// L'objet jQuery n'est en réalité que le constructeur d'initialisation "amélioré"
		// Besoin d'init si jQuery est appelé (autorisez simplement la génération d'une erreur si elle n'est pas incluse)
		return new jQuery.fn.init( sélecteur, contexte );
	} ;

jQuery.fn = jQuery.prototype = {

	// La version actuelle de jQuery utilisée
	jquery : version,

	constructeur : jQuery,

	// La longueur par défaut d'un objet jQuery est 0
	longueur : 0,

	toArray : fonction() {
		return slice.call(this);
	},

	// Récupère le Nième élément dans l'ensemble d'éléments correspondant OU
	// Récupère l'ensemble de l'élément correspondant sous forme d'un tableau propre
	obtenir : fonction (numéro) {

		// Renvoie tous les éléments dans un tableau propre
		si ( num == null ) {
			return slice.call(this);
		}

		// Renvoie juste un élément de l'ensemble
		renvoyer num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Prend un tableau d'éléments et le pousse sur la pile
	// (renvoyant le nouvel ensemble d'éléments correspondants)
	pushStack : fonction (éléments) {

		// Construire un nouvel ensemble d'éléments correspondants jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Ajoute l'ancien objet sur la pile (comme référence)
		ret.prevObject = ceci ;

		// Renvoie l'ensemble d'éléments nouvellement formé
		retour à la retraite;
	},

	// Exécute un rappel pour chaque élément de l'ensemble correspondant.
	chacun : fonction (rappel) {
		return jQuery.each(this, rappel);
	},

	map: fonction (rappel) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	tranche : fonction() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	d'abord : function() {
		renvoie this.eq( 0 );
	},

	dernier : fonction() {
		renvoie this.eq( -1 );
	},

	même : function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retourner ( je + 1 ) % 2 ;
		} ) );
	},

	impair : fonction() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			renvoie je % 2 ;
		} ) );
	},

	eq : fonction (je) {
		var len = this.length,
			j = +je + ( je < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fin : fonction() {
		renvoyer this.prevObject || this.constructor();
	},

	// Pour usage interne uniquement.
	// Se comporte comme une méthode Array, pas comme une méthode jQuery.
	poussez, poussez,
	trier : arr.sort,
	épissure : arr.splice
} ;

jQuery.extend = jQuery.fn.extend = fonction() {
	options var, nom, src, copie, copyIsArray, clone,
		cible = arguments[ 0 ] || {},
		je = 1,
		longueur = arguments.longueur,
		profond = faux ;

	// Gérer une situation de copie profonde
	if ( type de cible === "booléen" ) {
		profond = cible ;

		// Ignorer le booléen et la cible
		cible = arguments[ je ] || {} ;
		je++;
	}

	// Gère le cas où la cible est une chaîne ou quelque chose (possible en copie complète)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		cible = {} ;
	}

	// Étendre jQuery lui-même si un seul argument est passé
	si ( je === longueur ) {
		cible = ceci ;
		je--;
	}

	pour ( ; je < longueur; i++ ) {

		// Ne traite que les valeurs non nulles/non définies
		si ( ( options = arguments[ i ] ) != null ) {

			// Extension de l'objet de base
			pour (nom dans les options) {
				copie = options[ nom ];

				// Empêcher la pollution Object.prototype
				// Empêche une boucle sans fin
				if ( nom === "__proto__" || target === copie ) {
					continuer;
				}

				// Récursif si nous fusionnons des objets ou des tableaux simples
				if ( deep && copie && ( jQuery.isPlainObject( copie ) ||
					( copyIsArray = Array.isArray( copie ) ) ) ) {
					src = cible[ nom ];

					// Garantit le type approprié pour la valeur source
					si ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						cloner = {} ;
					} autre {
						clone = src;
					}
					copyIsArray = faux ;

					// Ne déplacez jamais les objets originaux, clonez-les
					target[ nom ] = jQuery.extend( deep, clone, copy );

				// N'apporte pas de valeurs non définies
				} else if ( copie !== non défini ) {
					cible[nom] = copie ;
				}
			}
		}
	}

	// Renvoie l'objet modifié
	cible de retour ;
} ;

jQuery.extend( {

	// Unique pour chaque copie de jQuery sur la page
	expando : "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Supposons que jQuery soit prêt sans le module prêt
	isReady : vrai,

	erreur : fonction (msg) {
		lancer une nouvelle erreur (msg);
	},

	noop : fonction() {},

	isPlainObject : fonction (obj) {
		var proto, Ctor;

		// Détecter les points négatifs évidents
		// Utilisez toString au lieu de jQuery.type pour capturer les objets hôtes
		if ( !obj || toString.call( obj ) !== "[objet Objet]" ) {
			renvoie faux ;
		}

		proto = getProto( obj );

		// Les objets sans prototype (par exemple, `Object.create( null )`) sont simples
		si ( !proto ) {
			renvoie vrai ;
		}

		// Les objets avec prototype sont simples s'ils ont été construits par une fonction Objet globale
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject : fonction (obj) {
		nom de la variable ;

		pour (nom dans obj) {
			renvoie faux ;
		}
		renvoie vrai ;
	},

	// Évalue un script dans un contexte fourni ; retombe sur le mondial
	// si non spécifié.
	globalEval : fonction (code, options, doc) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	chacun : fonction (obj, rappel) {
		var longueur, je = 0 ;

		si ( isArrayLike ( obj ) ) {
			longueur = obj.longueur ;
			pour ( ; je < longueur; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					casser;
				}
			}
		} autre {
			pour ( je dans obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					casser;
				}
			}
		}

		retourner obj ;
	},


	// Récupère la valeur texte d'un tableau de nœuds DOM
	texte : fonction (élément) {
		nœud var,
			ret = "",
			je = 0,
			nodeType = elem.nodeType;

		si ( !nodeType ) {

			// S'il n'y a pas de nodeType, cela devrait être un tableau
			while ( (noeud = elem[ i++ ] ) ) {

				// Ne traverse pas les nœuds de commentaires
				ret += jQuery.text( noeud );
			}
		}
		si ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		si ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		si ( nodeType === 3 || nodeType === 4 ) {
			retourner elem.nodeValue ;
		}

		// N'inclut pas les nœuds de commentaires ou d'instructions de traitement

		retour à la retraite;
	},

	// les résultats sont destinés à un usage interne uniquement
	makeArray : fonction (arr, résultats) {
		var ret = résultats || [] ;

		si ( arr != null ) {
			si ( isArrayLike ( Objet ( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} autre {
				push.call( ret, arr );
			}
		}

		retour à la retraite;
	},

	inArray : fonction (elem, arr, i) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc : fonction (élément) {
		var espace de noms = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Supposons que HTML lorsque documentElement n'existe pas encore, comme à l'intérieur
		// fragments de documents.
		return !rhtmlSuffix.test( espace de noms || docElem && docElem.nodeName || "HTML" );
	},

	// Prise en charge : Android <=4.0 uniquement, PhantomJS 1 uniquement
	// push.apply(_, arraylike) est lancé sur l'ancien WebKit
	fusionner : fonction (premier, deuxième) {
		var len = +seconde.longueur,
			j = 0,
			je = première.longueur;

		pour ( ; j < len; j++ ) {
			premier[ i++ ] = second[ j ];
		}

		premier.longueur = i;

		revenez d'abord;
	},

	grep : fonction (éléments, rappel, inversion) {
		var callbackInverse,
			correspond = [],
			je = 0,
			longueur = éléments.longueur,
			callbackExpect = !invert;

		// Parcourt le tableau en sauvegardant uniquement les éléments
		// qui passe la fonction validateur
		pour ( ; je < longueur; i++ ) {
			callbackInverse = !callback( elems[ je ], je );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		matchs retour ;
	},

	// arg est réservé à un usage interne
	map : fonction (éléments, rappel, argument) {
		var longueur, valeur,
			je = 0,
			ret = [];

		// Parcourt le tableau, traduisant chacun des éléments vers leurs nouvelles valeurs
		si ( isArrayLike ( elems ) ) {
			longueur = éléments.longueur;
			pour ( ; je < longueur; i++ ) {
				valeur = rappel( elems[ i ], i, arg );

				si ( valeur != null ) {
					ret.push( valeur );
				}
			}

		// Parcourt chaque clé de l'objet,
		} autre {
			pour ( je en éléments ) {
				valeur = rappel( elems[ i ], i, arg );

				si ( valeur != null ) {
					ret.push( valeur );
				}
			}
		}

		// Aplatit tous les tableaux imbriqués
		return flat( ret );
	},

	// Un compteur GUID global pour les objets
	guide : 1,

	// jQuery.support n'est pas utilisé dans Core mais d'autres projets attachent leur
	// lui confère des propriétés, il doit donc exister.
	soutien: soutien
} );

if ( type de symbole === "fonction" ) {
	jQuery.fn[Symbole.iterator] = arr[Symbole.iterator];
}

// Remplit la carte class2type
jQuery.each( "Numéro booléen Chaîne Fonction Tableau Date RegExp Objet Symbole d'erreur".split( " " ),
	fonction( _i, nom ) {
		class2type[ "[objet " + nom + "]" ] = nom.toLowerCase();
	} );

fonction isArrayLike( obj ) {

	// Support : véritable iOS 8.2 uniquement (non reproductible dans le simulateur)
	// Vérification `in` utilisée pour éviter l'erreur JIT (gh-2145)
	// hasOwn n'est pas utilisé ici en raison de faux négatifs
	// concernant la longueur de la liste de nœuds dans IE
	var longueur = !!obj && "longueur" dans obj && obj.length,
		type = toType( obj );

	si ( isFunction( obj ) || isWindow( obj ) ) {
		renvoie faux ;
	}

	type de retour === "tableau" || longueur === 0 ||
		type de longueur === "numéro" && longueur > 0 && ( longueur - 1 ) dans obj;
}


function nodeName (élément, nom) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var espace blanc = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = nouvelle RegExp (
	"^" + espace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espace + "+$",
	"g"
);




// Remarque : un élément ne se contient pas
jQuery.contains = fonction (a, b) {
	var bup = b && b.parentNode;

	renvoyer un === bup || !!( bup && bup.nodeType === 1 && (

		// Prise en charge : IE 9 - 11+
		// IE n'a pas « contient » sur SVG.
		a.contient ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
} ;




// Sérialisation de chaîne/identifiant CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

fonction fcssescape( ch, asCodePoint ) {
	si ( asCodePoint ) {

		// U+0000 NULL devient U+FFFD CARACTÈRE DE REMPLACEMENT
		si ( ch === "\0" ) {
			renvoie "\uFFFD" ;
		}

		// Les caractères de contrôle et les nombres (en fonction de la position) sont échappés sous forme de points de code
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// D'autres caractères ASCII potentiellement spéciaux sont échappés par une barre oblique inverse
	renvoyer "\\" + ch ;
}

jQuery.escapeSelector = fonction (sel) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
} ;




var préféréDoc = document,
	pushNative = pousser ;

( fonction() {

var je,
	Expr,
	Contexte le plus externe,
	sortEntrée,
	hasDuplicate,
	pousser = pushNative,

	// Vars de documents locaux
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	allumettes,

	// Données spécifiques à l'instance
	expando = jQuery.expando,
	dirruns = 0,
	fait = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = fonction ( a, b ) {
		si ( une === b ) {
			hasDuplicate = vrai ;
		}
		renvoie 0 ;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"boucle|multiple|ouvert|lecture seule|obligatoire|portée",

	// Expressions régulières

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifiant = "(?:\\\\[\\da-fA-F]{1,6}" + espace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Sélecteurs d'attributs : https://www.w3.org/TR/selectors/#attribute-selectors
	attributs = "\\[" + espace + "*(" + identifiant + ")(?:" + espace +

		// Opérateur (capture 2)
		"*([*^$|!~]?=)" + espace +

		// "Les valeurs d'attribut doivent être des identifiants CSS [capture 5] ou des chaînes [capture 3 ou capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + identifiant + "))|)" +
		espace + "*\\]",

	pseudos = ":(" + identifiant + ")(?:\\((" +

		// Pour réduire le nombre de sélecteurs nécessitant une tokenisation dans le preFilter, préférez les arguments :
		// 1. cité (capture 3 ; capture 4 ou capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributs + ")*)|" +

		// 3. autre chose (capture 2)
		".*" +
		")\\)|)",

	// Espaces de début et de fin non échappés, capturant certains caractères non-espaces précédant ces derniers
	rwhitespace = new RegExp (espace + "+", "g" ),

	rcomma = new RegExp( "^" + espace + "*," + espace + "*" ),
	rleadingCombinator = new RegExp( "^" + espace + "*([>+~]|" + espace + ")" +
		espace + "*" ),
	rdescend = new RegExp (espace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifiant + "$" ),

	matchExpr = {
		ID : new RegExp( "^#(" + identifiant + ")" ),
		CLASSE : new RegExp( "^\\.(" + identifiant + ")" ),
		TAG : new RegExp( "^(" + identifiant + "|[*])" ),
		ATTR : new RegExp( "^" + attributs),
		PSEUDO : nouveau RegExp( "^" + pseudos ),
		ENFANT : nouvelle RegExp (
			"^:(uniquement|premier|dernier|ntième|ntième-dernier)-(enfant|de-type)(?:\\(" +
				espace + "*(pair|impair|(([+-]|)(\\d*)n|)" + espace + "*(?:([+-]|)" +
				espace + "*(\\d+)|))" + espace + "*\\)|)", "i" ),
		bool : new RegExp( "^(?:" + booléens + ")$", "i" ),

		// À utiliser dans les bibliothèques implémentant .is()
		// Nous l'utilisons pour la correspondance POS dans `select`
		needContext : new RegExp( "^" + espace +
			"*[>+~]|:(pair|impair|eq|gt|lt|nth|first|last)(?:\\(" + espace +
			"*((?:-\\d)?\\d*)" + espaces + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Sélecteurs ID ou TAG ou CLASS facilement analysables/récupérables
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	frère-frère = /[+~]/,

	// CSS échappe
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = fonction (échappement, nonHex) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		si ( non Hex ) {

			// Supprime le préfixe de barre oblique inverse d'une séquence d'échappement non hexadécimale
			renvoie un non-Hex ;
		}

		// Remplace une séquence d'échappement hexadécimale par le point de code Unicode codé
		// Prise en charge : IE <=11+
		// Pour les valeurs en dehors du plan multilingue de base (BMP), construisez manuellement un
		// paire de substitution
		retourner haut <0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( haut >> 10 | 0xD800, haut & 0x3FF | 0xDC00 );
	},

	// Utilisé pour les iframes ; voir `setDocument`.
	// Prise en charge : IE 9 - 11+, Edge 12 - 18+
	// La suppression du wrapper de fonction provoque une "Autorisation refusée"
	// erreur dans IE/Edge.
	déchargerHandler = fonction() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		fonction (élément) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir : "parentNode", suivant : "légende" }
	);

// Prise en charge : IE <=9 uniquement
// L'accès à document.activeElement peut être lancé de manière inattendue
// https://bugs.jquery.com/ticket/13393
fonction safeActiveElement() {
	essayer {
		retourner document.activeElement ;
	} attraper ( euh ) { }
}

// Optimisation pour push.apply( _, NodeList )
essayer {
	push.appliquer(
		( arr = slice.call (preferredDoc.childNodes ) ),
		PreferredDoc.childNodes
	);

	// Prise en charge : Android <=4.0
	// Détecter l'échec silencieux de push.apply
	// eslint-disable-next-line aucune expression-inutilisée
	arr[preferredDoc.childNodes.length ].nodeType;
} attraper ( e ) {
	pousser = {
		appliquer : fonction (cible, els) {
			pushNative.apply( target, slice.call( els ) );
		},
		appel : fonction (cible) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	} ;
}

fonction find (sélecteur, contexte, résultats, graine) {
	var m, je, elem, nid, match, groupes, newSelector,
		newContext = contexte && context.ownerDocument,

		// nodeType est par défaut à 9, puisque le contexte est par défaut à document
		nodeType = contexte ? contexte.nodeType : 9;

	résultats = résultats || [] ;

	// Retour anticipé des appels avec un sélecteur ou un contexte invalide
	if ( typede sélecteur !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		renvoyer les résultats ;
	}

	// Essayez de raccourcir les opérations de recherche (par opposition aux filtres) dans les documents HTML
	si ( !graine ) {
		setDocument(contexte);
		contexte = contexte || document;

		si ( documentIsHTML ) {

			// Si le sélecteur est suffisamment simple, essayez d'utiliser une méthode DOM "get*By*"
			// (sauf contexte DocumentFragment, où les méthodes n'existent pas)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// Sélecteur d'identifiant
				si ( ( m = match[ 1 ] ) ) {

					// Contexte du document
					si ( nodeType === 9 ) {
						si ( ( elem = context.getElementById( m ) ) ) {

							// Prise en charge : IE 9 uniquement
							// getElementById peut faire correspondre les éléments par nom au lieu de leur ID
							si ( elem.id === m ) {
								push.call( résultats, élément );
								renvoyer les résultats ;
							}
						} autre {
							renvoyer les résultats ;
						}

					// Contexte de l'élément
					} autre {

						// Prise en charge : IE 9 uniquement
						// getElementById peut faire correspondre les éléments par nom au lieu de leur ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains(contexte, elem) &&
							elem.id === m ) {

							push.call( résultats, élément );
							renvoyer les résultats ;
						}
					}

				// Sélecteur de type
				} sinon si ( match[ 2 ] ) {
					push.apply( résultats, context.getElementsByTagName( sélecteur ) );
					renvoyer les résultats ;

				// Sélecteur de classe
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( résultats, context.getElementsByClassName( m ) );
					renvoyer les résultats ;
				}
			}

			// Profitez de querySelectorAll
			if ( !nonnativeSelectorCache[ sélecteur + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( sélecteur ) ) ) {

				newSelector = sélecteur ;
				newContext = contexte ;

				// qSA prend en compte les éléments en dehors d'une racine de portée lors de l'évaluation de l'enfant ou
				// combinateurs descendants, ce qui n'est pas ce que nous voulons.
				// Dans de tels cas, nous contournons le comportement en préfixant chaque sélecteur dans le
				// liste avec un sélecteur d'ID faisant référence au contexte de portée.
				// La technique doit également être utilisée lorsqu'un combinateur principal est utilisé
				// car ces sélecteurs ne sont pas reconnus par querySelectorAll.
				// Merci à Andrew Dupont pour cette technique.
				si ( nodeType === 1 &&
					( rdescend.test( sélecteur ) || rleadingCombinator.test( sélecteur ) ) ) {

					// Développe le contexte pour les sélecteurs frères et sœurs
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						contexte;

					// On peut utiliser :scope au lieu du hack ID si le navigateur
					// le prend en charge & si nous ne changeons pas le contexte.
					// Prise en charge : IE 11+, Edge 17 - 18+
					// IE/Edge génère parfois une erreur "Autorisation refusée" lorsque
					// comparaison stricte de deux documents ; les comparaisons superficielles fonctionnent.
					// eslint-disable-next-line eqeqeq
					if ( newContext != contexte || !support.scope ) {

						// Capturez l'ID de contexte, en le définissant d'abord si nécessaire
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} autre {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Préfixe chaque sélecteur de la liste
					groups = tokenize( sélecteur );
					je = groupes.longueur;
					alors que je-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groupes[ i ] );
					}
					newSelector = groups.join( "," );
				}

				essayer {
					push.apply(résultats,
						newContext.querySelectorAll( newSelector )
					);
					renvoyer les résultats ;
				} catch ( qsaErreur ) {
					nonnativeSelectorCache( sélecteur, true );
				} enfin {
					si ( nid === expando ) {
						contexte.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Tous les autres
	return select( selector.replace( rtrimCSS, "$1" ), contexte, résultats, graine );
}

/**
 * Créer des caches clé-valeur de taille limitée
 * @returns {function(string, object)} Renvoie les données de l'objet après les avoir stockées sur lui-même avec
 * nom de la propriété la chaîne (avec un suffixe d'espace) et (si le cache est plus grand que Expr.cacheLength)
 * suppression de l'entrée la plus ancienne
 */
fonction createCache() {
	var clés = [];

	cache de fonction (clé, valeur) {

		// Utilisez (key + " ") pour éviter les collisions avec les propriétés natives du prototype
		// (voir https://github.com/jquery/sizzle/issues/157)
		if ( touches.push( clé + " " ) > Expr.cacheLength ) {

			// Ne conserve que les entrées les plus récentes
			supprimer le cache[keys.shift()] ;
		}
		return ( cache[ clé + " " ] = valeur );
	}
	retourner le cache ;
}

/**
 * Marquer une fonction pour une utilisation spéciale par le module de sélection jQuery
 * @param {Function} fn La fonction à marquer
 */
fonction markFunction( fn ) {
	fn[expando] = true;
	retourner fn ;
}

/**
 * Prise en charge des tests à l'aide d'un élément
 * @param {Function} fn Passe l'élément créé et renvoie un résultat booléen
 */
fonction assert(fn) {
	var el = document.createElement( "fieldset" );

	essayer {
		return !!fn( el );
	} attraper ( e ) {
		renvoie faux ;
	} enfin {

		// Supprime de son parent par défaut
		if ( el.parentNode ) {
			el.parentNode.removeChild( el);
		}

		// libère de la mémoire dans IE
		el = nul ;
	}
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour les types d'entrée
 * @param {Chaîne} tapez
 */
fonction createInputPseudo(type) {
	fonction de retour (élément) {
		return nodeName( elem, "input" ) && elem.type === type;
	} ;
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour les boutons
 * @param {Chaîne} tapez
 */
function createButtonPseudo(type) {
	fonction de retour (élément) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	} ;
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour :enabled/:disabled
 * @param {Boolean} désactivé true pour :disabled; faux pour : activé
 */
function createDisabledPseudo( désactivé) {

	// Connu : désactivé faux positifs : champset[désactivé] > légende : nth-of-type (n+2) : can-disable
	fonction de retour (élément) {

		// Seuls certains éléments peuvent correspondre à :enabled ou :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "formulaire" dans elem ) {

			// Vérification des handicaps hérités sur les éléments non handicapés pertinents :
			// * répertorie les éléments associés au formulaire dans un ensemble de champs désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * éléments d'option dans un optgroup désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Tous ces éléments ont une propriété "form".
			if ( elem.parentNode && elem.disabled === false ) {

				// Les éléments d'option sont transférés à un optgroup parent s'il est présent
				if ( "étiquette" dans elem ) {
					if ( "étiquette" dans elem.parentNode ) {
						return elem.parentNode.disabled === désactivé ;
					} autre {
						return elem.disabled === désactivé ;
					}
				}

				// Prise en charge : IE 6 - 11+
				// Utilisez la propriété de raccourci isDisabled pour vérifier les ancêtres de l'ensemble de champs désactivés
				return elem.isDisabled === désactivé ||

					// Là où il n'y a pas de isDisabled, vérifiez manuellement
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === désactivé ;
			}

			return elem.disabled === désactivé ;

		// Essayez d'éliminer les éléments qui ne peuvent pas être désactivés avant de faire confiance à la propriété désactivée.
		// Certaines victimes se retrouvent prises dans nos filets (label, légende, menu, piste), mais cela ne devrait pas
		// existent même sur eux, et encore moins ont une valeur booléenne.
		} else if ( "étiquette" dans elem ) {
			return elem.disabled === désactivé ;
		}

		// Les éléments restants ne sont ni :enabled ni :disabled
		renvoie faux ;
	} ;
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour les positionnels
 * @param {Fonction} fn
 */
function createPositionalPseudo(fn) {
	return markFunction( fonction( argument ) {
		argument = +argument ;
		return markFunction (fonction (graine, correspondances) {
			varj,
				matchIndexes = fn( [], seed.length, argument ),
				je = matchIndexes.length;

			// Correspond aux éléments trouvés aux index spécifiés
			alors que je-- ) {
				if ( graine[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Vérifie la validité d'un nœud en tant que contexte de sélecteur jQuery
 * @param {Element|Object=} contexte
 * @returns {Element|Object|Boolean} Le nœud d'entrée si acceptable, sinon une valeur fausse
 */
fonction testContext(contexte) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Définit les variables liées au document une fois en fonction du document actuel
 * @param {Element|Object} [node] Un élément ou un objet document à utiliser pour définir le document
 * @returns {Object} Renvoie le document actuel
 */
fonction setDocument (nœud) {
	var sous-fenêtre,
		doc = nœud ? node.ownerDocument || nœud : favoriteDoc ;

	// Retour anticipé si le document n'est pas valide ou est déjà sélectionné
	// Prise en charge : IE 11+, Edge 17 - 18+
	// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
	// deux documents ; les comparaisons superficielles fonctionnent.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		document de retour ;
	}

	// Mettre à jour les variables globales
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Prise en charge : iOS 7 uniquement, IE 9 - 11+
	// Les anciens navigateurs ne prenaient pas en charge les « correspondances » sans préfixe.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector ;

	// Prise en charge : IE 9 - 11+, Edge 12 - 18+
	// L'accès aux documents iframe après le déchargement génère des erreurs "autorisation refusée"
	// (voir trac-13936).
	// Limiter le correctif à IE et Edge Legacy ; malgré l'implémentation de "matches" par Edge 15+,
	// toutes les versions d'IE 9+ et Edge Legacy implémentent également `msMatchesSelector`.
	si ( documentElement.msMatchesSelector &&

		// Prise en charge : IE 11+, Edge 17 - 18+
		// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
		// deux documents ; les comparaisons superficielles fonctionnent.
		// eslint-disable-next-line eqeqeq
		favoriteDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Prise en charge : IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "décharger", déchargerHandler );
	}

	// Prise en charge : IE <10
	// Vérifiez si getElementById renvoie les éléments par nom
	// Les méthodes getElementById cassées ne récupèrent pas les noms définis par programme,
	// donc utilisez un test getElementsByName au rond-point
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		retourner !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Prise en charge : IE 9 uniquement
	// Vérifiez s'il est possible de faire matchesSelector
	// sur un nœud déconnecté.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call(el, "*" );
	} );

	// Prise en charge : IE 9 - 11+, Edge 12 - 18+
	// IE/Edge ne prend pas en charge la pseudo-classe :scope.
	support.scope = assert( fonction() {
		return document.querySelectorAll( ":scope" );
	} );

	// Prise en charge : Chrome 105 - 111 uniquement, Safari 15.4 - 16.3 uniquement
	// Assurez-vous que l'argument `:has()` est analysé sans pitié.
	// Nous incluons `*` dans le test pour détecter les implémentations boguées qui sont
	// indulgent _sélectivement_ (en particulier lorsque la liste comprend au moins
	// un sélecteur valide).
	// Notez que nous traitons l'absence totale de support pour `:has()` comme si c'était le cas
	// Prise en charge conforme aux spécifications, ce qui est bien car l'utilisation de `:has()` dans un tel
	// Les environnements échoueront dans le chemin qSA et reviendront à la traversée jQuery
	// de toute façon.
	support.cssHas = assert( function() {
		essayer {
			document.querySelector( ":has(*,:jqfake)" );
			renvoie faux ;
		} attraper ( e ) {
			renvoie vrai ;
		}
	} );

	// Filtrer l'ID et trouver
	si ( support.getById ) {
		Expr.filter.ID = fonction (identifiant) {
			var attrId = id.replace( runescape, funescape );
			fonction de retour (élément) {
				return elem.getAttribute( "id" ) === attrId;
			} ;
		} ;
		Expr.find.ID = fonction (identifiant, contexte) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( identifiant);
				renvoyer l'élément ? [ élément ] : [];
			}
		} ;
	} autre {
		Expr.filter.ID = fonction (identifiant) {
			var attrId = id.replace( runescape, funescape );
			fonction de retour (élément) {
				var node = typeof elem.getAttributeNode !== "indéfini" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			} ;
		} ;

		// Prise en charge : IE 6 - 7 uniquement
		// getElementById n'est pas fiable comme raccourci de recherche
		Expr.find.ID = fonction (identifiant, contexte) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				nœud var, je, éléments,
					elem = context.getElementById( identifiant);

				si ( élément ) {

					// Vérifiez l'attribut id
					node = elem.getAttributeNode( "id" );
					if (noeud && node.value === identifiant) {
						retourner [ élément ] ;
					}

					// Revenir sur getElementsByName
					elems = context.getElementsByName( identifiant);
					je = 0 ;
					tandis que ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if (noeud && node.value === identifiant) {
							retourner [ élément ] ;
						}
					}
				}

				retour [];
			}
		} ;
	}

	// Étiqueter
	Expr.find.TAG = fonction (balise, contexte) {
		if ( typeof context.getElementsByTagName !== "indéfini" ) {
			return context.getElementsByTagName( tag );

		// Les nœuds DocumentFragment n'ont pas de gEBTN
		} autre {
			return context.querySelectorAll( balise );
		}
	} ;

	// Classe
	Expr.find.CLASS = fonction (nom de classe, contexte) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	} ;

	/* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

	// Prise en charge de QSA et de matchesSelector

	rbuggyQSA = [];

	// Créer une regex QSA
	// Stratégie Regex adoptée par Diego Perini
	assert( fonction( el ) {

		entrée var ;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' désactivé='disabled'></a>" +
			"<select id='" + expando + "-\r\\' désactivé='disabled'>" +
			"<option selected=''></option></select>" ;

		// Prise en charge : iOS <=7 - 8 uniquement
		// Les attributs booléens et "valeur" ne sont pas traités correctement dans certains documents XML
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + espaces + "*(?:value|" + booléens + ")" );
		}

		// Prise en charge : iOS <=7 - 8 uniquement
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Prise en charge : iOS 8 uniquement
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// Le sélecteur sur la page `selector#id sibling-combinator` échoue
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Prise en charge : Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Dans certains types de documents, ces sélecteurs ne fonctionneraient pas de manière native.
		// C'est probablement OK mais pour des raisons de compatibilité ascendante, nous voulons conserver
		// les gère via la traversée jQuery dans jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":vérifié" );
		}

		// Prise en charge : applications natives Windows 8
		// Les attributs type et name sont restreints lors de l'affectation .innerHTML
		input = document.createElement( "input" );
		input.setAttribute( "type", "caché" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Prise en charge : IE 9 - 11+
		// Le sélecteur :disabled d'IE ne récupère pas les enfants des ensembles de champs désactivés
		// Prise en charge : Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Dans certains types de documents, ces sélecteurs ne fonctionneraient pas de manière native.
		// C'est probablement OK mais pour des raisons de compatibilité ascendante, nous voulons conserver
		// les gère via la traversée jQuery dans jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Prise en charge : IE 11+, Edge 15 - 18+
		// IE 11/Edge ne trouve pas d'éléments sur une requête `[name='']` dans certains cas.
		// Ajout d'un attribut temporaire au document avant que la sélection ne fonctionne
		// autour du problème.
		// Fait intéressant, IE 10 et versions antérieures ne semblent pas avoir ce problème.
		input = document.createElement( "input" );
		input.setAttribute( "nom", "" );
		el.appendChild( entrée );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + espace + "*nom" + espace + "*=" +
				espace + "*(?:''|\"\")" );
		}
	} );

	si ( !support.cssHas ) {

		// Prise en charge : Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Notre mécanisme habituel `try-catch` ne parvient pas à détecter les fichiers non pris en charge nativement
		// pseudo-classes à l'intérieur de `:has()` (comme `:has(:contains("Foo"))`)
		// dans les navigateurs qui analysent l'argument `:has()` comme une liste de sélection indulgente.
		// https://drafts.csswg.org/selectors/#relational nécessite désormais l'argument
		// à analyser sans pitié, mais les navigateurs ne se sont pas encore complètement adaptés.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Tri
	-------------------------------------------------- -------------------- */

	// Tri de l'ordre des documents
	sortOrder = fonction ( a, b ) {

		// Indicateur de suppression des doublons
		si ( une === b ) {
			hasDuplicate = vrai ;
			renvoie 0 ;
		}

		// Tri selon l'existence de la méthode si une seule entrée a compareDocumentPosition
		var comparer = !a.compareDocumentPosition - !b.compareDocumentPosition;
		si (comparer) {
			retourner comparer ;
		}

		// Calcule la position si les deux entrées appartiennent au même document
		// Prise en charge : IE 11+, Edge 17 - 18+
		// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
		// deux documents ; les comparaisons superficielles fonctionnent.
		// eslint-disable-next-line eqeqeq
		comparer = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Sinon on sait qu'ils sont déconnectés
			1;

		// Nœuds déconnectés
		si ( comparer & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === comparer ) ) {

			// Choisissez le premier élément lié à notre document préféré
			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == PreferredDoc &&
				find.contains (preferredDoc, a) ) {
				renvoie -1 ;
			}

			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == PreferredDoc &&
				find.contains (preferredDoc, b) ) {
				renvoyer 1 ;
			}

			// Conserver l'ordre d'origine
			retourner sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0 ;
		}

		retour comparer & 4 ? -1 : 1 ;
	} ;

	document de retour ;
}

find.matches = fonction (expr, éléments) {
	return find( expr, null, null, elements );
} ;

find.matchesSelector = fonction (elem, expr) {
	setDocument( élément );

	si ( documentEstHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		essayer {
			var ret = matches.call( elem, expr );

			// Le matchesSelector d'IE 9 renvoie false sur les nœuds déconnectés
			si ( ret || support.disconnectedMatch ||

					// De plus, les nœuds déconnectés seraient dans un document
					// fragment dans IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				retour à la retraite;
			}
		} attraper ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
} ;

find.contains = fonction (contexte, élément) {

	// Définit les variables du document si nécessaire
	// Prise en charge : IE 11+, Edge 17 - 18+
	// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
	// deux documents ; les comparaisons superficielles fonctionnent.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || contexte ) != document ) {
		setDocument(contexte);
	}
	return jQuery.contains( contexte, elem );
} ;


find.attr = fonction (élément, nom) {

	// Définit les variables du document si nécessaire
	// Prise en charge : IE 11+, Edge 17 - 18+
	// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
	// deux documents ; les comparaisons superficielles fonctionnent.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( élément );
	}

	var fn = Expr.attrHandle[ nom.toLowerCase() ],

		// Ne vous laissez pas berner par les propriétés Object.prototype (voir trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, nom, !documentIsHTML ) :
			indéfini;

	si ( val !== non défini ) {
		valeur de retour ;
	}

	return elem.getAttribute( nom );
} ;

find.error = fonction (msg) {
	throw new Error( "Erreur de syntaxe, expression non reconnue : " + msg );
} ;

/**
 * Tri des documents et suppression des doublons
 * Résultats @param {ArrayLike}
 */
jQuery.uniqueSort = fonction (résultats) {
	var élém,
		doublons = [],
		j = 0,
		je = 0 ;

	// À moins que nous *sachions* que nous pouvons détecter les doublons, supposons leur présence
	//
	// Prise en charge : Android <=4.0+
	// Les tests de détection des doublons sont imprévisibles, alors supposons plutôt que nous ne pouvons pas
	// dépend de la détection des doublons dans tous les navigateurs sans tri stable.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( résultats, sortOrder );

	si ( hasDuplicate ) {
		while ( ( elem = résultats[ i++ ] ) ) {
			if ( elem === résultats[ i ] ) {
				j = duplicates.push( i );
			}
		}
		tandis que ( j-- ) {
			splice.call( résultats, doublons[ j ], 1 );
		}
	}

	// Efface l'entrée après le tri pour libérer les objets
	// Voir https://github.com/jquery/sizzle/pull/225
	sortInput = null ;

	renvoyer les résultats ;
} ;

jQuery.fn.uniqueSort = fonction() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
} ;

Expr = jQuery.expr = {

	// Peut être ajusté par l'utilisateur
	longueur du cache : 50,

	createPseudo : markFunction,

	correspondance : matchExpr,

	attrHandle : {},

	trouver: {},

	relatif: {
		">": { dir : "parentNode", first : true },
		" " : {rép : "parentNode" },
		"+": { dir : "previousSibling", first : true },
		"~": { dir: "previousSibling" }
	},

	préFiltre : {
		ATTR : fonction (correspondance) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Déplace la valeur donnée pour qu'elle corresponde[3], qu'elle soit entre guillemets ou non
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			si ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		ENFANT : fonction (correspondance) {

			/* correspond à matchExpr["CHILD"]
				1 type (uniquement | nième |...)
				2 quoi (enfant|de-type)
				3 arguments (pair|impair|\d*|\d*n([+-]\d+)?|...)
				4 composant xn de l'argument xn+y ([+-]?\d*n|)
				5 signe du composant xn
				6 x du composant xn
				7 signe de la composante y
				8 ans de composante y
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "ntième" ) {

				// nième-* nécessite un argument
				si ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// Paramètres numériques x et y pour Expr.filter.CHILD
				// rappelez-vous que faux/vrai est respectivement converti en 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "pair" || match[ 3 ] === "impair" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "impair" );

			// les autres types interdisent les arguments
			} sinon si ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			revanche;
		},

		PSEUDO : fonction (correspondance) {
			var excès,
				non cité = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				renvoie null ;
			}

			// Accepte les arguments cités tels quels
			si ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || correspondre[ 5 ] || "" ;

			// Supprime les caractères en excès des arguments non cités
			} else if ( sans guillemets && rpseudo.test( sans guillemets ) &&

				// Récupère l'excédent de tokenize (récursivement)
				( excès = tokenize ( non cité, vrai ) ) &&

				// avance à la parenthèse fermante suivante
				( excès = unquoted.indexOf( ")", unquoted.length - excès ) - unquoted.length ) ) {

				// l'excès est un indice négatif
				match[ 0 ] = match[ 0 ].slice( 0, excès );
				match[ 2 ] = unquoted.slice( 0, excès );
			}

			// Renvoie uniquement les captures nécessaires à la méthode de pseudo-filtre (type et argument)
			return match.slice( 0, 3 );
		}
	},

	filtre : {

		ÉTIQUETTE : fonction (nodeNameSelector) {
			var ExpectNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				fonction() {
					renvoie vrai ;
				} :
				fonction (élément) {
					return nodeName (elem, ExpectNodeName );
				} ;
		},

		CLASSE : fonction (nom de classe) {
			var pattern = classCache[ nom de classe + " " ];

			modèle de retour ||
				( modèle = new RegExp( "(^|" + espace + ")" + nom de classe +
					"(" + espaces + "|$)" ) ) &&
				classCache (nom de classe, fonction (elem) {
					retourner le motif.test(
						type de elem.className === "string" && elem.className ||
							type de elem.getAttribute !== "non défini" &&
								elem.getAttribute( "classe" ) ||
							""
					);
				} );
		},

		ATTR : fonction (nom, opérateur, vérification) {
			fonction de retour (élément) {
				var résultat = find.attr( elem, nom );

				si ( résultat == null ) {
					opérateur de retour === "!=";
				}
				si ( !opérateur ) {
					renvoie vrai ;
				}

				résultat += "" ;

				si ( opérateur === "=" ) {
					retourner le résultat === vérifier ;
				}
				si (opérateur === "!=" ) {
					retourner le résultat !== vérifier;
				}
				si (opérateur === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				si ( opérateur === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				si (opérateur === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				si (opérateur === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf(vérifier) ​​> -1 ;
				}
				si (opérateur === "|=" ) {
					résultat de retour === vérifier || result.slice( 0, check.length + 1 ) === check + "-";
				}

				renvoie faux ;
			} ;
		},

		ENFANT : fonction (type, quoi, _argument, premier, dernier) {
			var simple = type.slice( 0, 3 ) !== "ntième",
				forward = type.slice( -4 ) !== "dernier",
				ofType = quoi === "de-type";

			return first === 1 && last === 0 ?

				// Raccourci pour :nth-*(n)
				fonction (élément) {
					return !!elem.parentNode;
				} :

				fonction (elem, _context, xml) {
					var cache, externalCache, nœud, nodeIndex, début,
						dir = simple !== avancer ? "prochainSibling" : "précédentSibling",
						parent = elem.parentNode,
						nom = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = faux ;

					si ( parent ) {

						// :(premier|dernier|seulement)-(enfant|de-type)
						si ( simple ) {
							tandis que ( rép ) {
								nœud = élément ;
								while ( ( noeud = noeud [ rép ] ) ) {
									si ( deType ?
										nodeName( nœud, nom ) :
										node.nodeType === 1 ) {

										renvoie faux ;
									}
								}

								// Inverser la direction pour :only-* (si nous ne l'avons pas encore fait)
								start = dir = type === "uniquement" && !start && "nextSibling";
							}
							renvoie vrai ;
						}

						start = [ avancer ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stocke les données du cache sur `parent`
						if ( forward && useCache ) {

							// Recherche `elem` à partir d'un index précédemment mis en cache
							externalCache = parent[ développer ] || ( parent[expando] = {} );
							cache = externalCache[type] || [] ;
							nodeIndex = cache[ 0 ] === répertoires && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Revenir à la recherche de `elem` depuis le début
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// Une fois trouvé, met en cache les index sur `parent` et interrompt
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									externalCache[ type] = [ dirruns, nodeIndex, diff ];
									casser;
								}
							}

						} autre {

							// Utiliser l'index d'élément précédemment mis en cache si disponible
							si ( useCache ) {
								externalCache = elem[expando] || ( elem[expando ] = {} );
								cache = externalCache[type] || [] ;
								nodeIndex = cache[ 0 ] === répertoires && cache[ 1 ];
								diff = noeudIndex ;
							}

							// xml :ntième-enfant(...)
							// ou :nth-last-child(...) ou :nth(-last)?-of-type(...)
							si ( diff === faux ) {

								// Utilisez la même boucle que ci-dessus pour rechercher `elem` depuis le début
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									si ( ( deType ?
										nodeName( nœud, nom ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache l'index de chaque élément rencontré
										si ( useCache ) {
											externalCache = node[ développer ] ||
												( node[ expando ] = {} );
											externalCache[ type ] = [ dirruns, diff ];
										}

										si ( noeud === elem ) {
											casser;
										}
									}
								}
							}
						}

						// Incorpore le décalage, puis vérifie la taille du cycle
						diff -= dernier ;
						return diff === premier || ( diff % premier === 0 && diff / premier >= 0 );
					}
				} ;
		},

		PSEUDO : fonction (pseudo, argument) {

			// les noms de pseudo-classes ne sont pas sensibles à la casse
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Priorité par respect de la casse au cas où des pseudos personnalisés seraient ajoutés avec des lettres majuscules
			// N'oubliez pas que setFilters hérite des pseudos
			var arguments,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "pseudo non pris en charge : " + pseudo );

			// L'utilisateur peut utiliser createPseudo pour indiquer que
			// des arguments sont nécessaires pour créer la fonction de filtre
			// comme le fait jQuery
			if ( fn[ développer ] ) {
				return fn(argument);
			}

			// Mais conserve le support des anciennes signatures
			si ( longueur fn > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( fonction( graine, correspondances ) {
						var idx,
							correspondant = fn (graine, argument),
							je = correspond.longueur;
						alors que je-- ) {
							idx = indexOf.call( graine, correspondant[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					fonction (élément) {
						return fn( elem, 0, args );
					} ;
			}

			retourner fn ;
		}
	},

	pseudo : {

		// Pseudonymes potentiellement complexes
		pas : markFunction( function( sélecteur ) {

			// Coupe le sélecteur passé à la compilation
			// pour éviter de traiter le début et la fin
			// les espaces comme combinateurs
			var entrée = [],
				résultats = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[expando] ?
				markFunction (fonction (graine, correspondances, _context, xml) {
					var élém,
						sans correspondance = matcher (seed, null, xml, [] ),
						je = graine.longueur;

					// Fait correspondre les éléments sans correspondance avec `matcher`
					alors que je-- ) {
						si ( ( elem = sans correspondance [ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				fonction (elem, _context, xml) {
					entrée[ 0 ] = élément ;
					matcher( entrée, null, xml, résultats );

					// Ne garde pas l'élément
					// (voir https://github.com/jquery/sizzle/issues/299)
					entrée[ 0 ] = nul ;
					return !results.pop();
				} ;
		} ),

		a : markFunction (fonction (sélecteur) {
			fonction de retour (élément) {
				return find( sélecteur, elem ).length > 0;
			} ;
		} ),

		contient : markFunction( function( texte ) {
			texte = text.replace( runescape, funescape );
			fonction de retour (élément) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( texte ) > -1;
			} ;
		} ),

		// "Si un élément est représenté par un sélecteur :lang()
		// est basé uniquement sur la valeur linguistique de l'élément
		// étant égal à l'identifiant C,
		// soit en commençant par l'identifiant C immédiatement suivi de "-".
		// La correspondance de C avec la valeur de langage de l'élément est effectuée sans tenir compte de la casse.
		// L'identifiant C ne doit pas nécessairement être un nom de langue valide."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( fonction( lang ) {

			// la valeur lang doit être un identifiant valide
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "langue non prise en charge : " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			fonction de retour (élément) {
				var elemLang;
				faire {
					si ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				renvoie faux ;
			} ;
		} ),

		// Divers
		cible : fonction (élément) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		racine : fonction (élément) {
			return elem === documentElement;
		},

		focus : fonction (élément) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Propriétés booléennes
		activé : createDisabledPseudo( false ),
		désactivé : createDisabledPseudo( true ),

		vérifié : fonction (élément) {

			// En CSS3, :checked doit renvoyer les éléments cochés et sélectionnés
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		sélectionné : fonction (élément) {

			// Prise en charge : IE <=11+
			// Accès à la propriété selectedIndex
			// force le navigateur à traiter l'option par défaut comme
			// sélectionné dans un optgroup.
			si ( elem.parentNode ) {
				// eslint-disable-next-line aucune expression-inutilisée
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contenu
		vide : fonction (élément) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty est annulé par l'élément (1) ou les nœuds de contenu (texte : 3 ; cdata : 4 ; entité ref : 5),
			// mais pas par d'autres (commentaire : 8 ; instruction de traitement : 7 ; etc.)
			// nodeType < 6 fonctionne car les attributs (2) n'apparaissent pas comme enfants
			pour ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				si ( elem.nodeType < 6 ) {
					renvoie faux ;
				}
			}
			renvoie vrai ;
		},

		parent : fonction (élément) {
			return !Expr.pseudos.empty( elem );
		},

		// Types d'éléments/entrées
		en-tête : fonction (élément) {
			return rheader.test( elem.nodeName );
		},

		entrée : fonction (élément) {
			return rinputs.test( elem.nodeName );
		},

		bouton : fonction (élément) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "bouton" );
		},

		texte : fonction (élément) {
			varattr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Prise en charge : IE <10 uniquement
				// De nouvelles valeurs d'attribut HTML5 (par exemple, "recherche") apparaissent
				// avec elem.type === "texte"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "texte" );
		},

		// Position dans la collection
		d'abord : createPositionalPseudo( function() {
			retourner [ 0 ];
		} ),

		dernier : createPositionalPseudo( function( _matchIndexes, length ) {
			retourner [ longueur - 1 ];
		} ),

		eq : createPositionalPseudo (fonction (_matchIndexes, longueur, argument) {
			return [ argument < 0 ? argument + longueur : argument ];
		} ),

		même : createPositionalPseudo( function( matchIndexes, length ) {
			var je = 0;
			pour ( ; je < longueur; je += 2 ) {
				matchIndexes.push( i );
			}
			renvoie les index matchIndex ;
		} ),

		impair : createPositionalPseudo (fonction (matchIndexes, longueur) {
			var je = 1;
			pour ( ; je < longueur; je += 2 ) {
				matchIndexes.push( i );
			}
			renvoie les index matchIndex ;
		} ),

		lt : createPositionalPseudo (fonction (matchIndexes, longueur, argument) {
			var je;

			si ( argument < 0 ) {
				je = argument + longueur ;
			} else if (argument > longueur) {
				je = longueur ;
			} autre {
				je = argument ;
			}

			pour ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			renvoie les index matchIndex ;
		} ),

		gt : createPositionalPseudo (fonction (matchIndexes, longueur, argument) {
			var je = argument < 0 ? argument + longueur : argument;
			pour ( ; ++i < longueur; ) {
				matchIndexes.push( i );
			}
			renvoie les index matchIndex ;
		} )
	}
} ;

Expr.pseudos.nth = Expr.pseudos.eq;

// Ajout de pseudos de type bouton/entrée
pour ( je dans { radio : vrai, case à cocher : vrai, fichier : vrai, mot de passe : vrai, image : vrai } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
pour ( je dans { soumettre : vrai, réinitialiser : vrai } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API simple pour créer de nouveaux setFilters
fonction setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize (sélecteur, parseOnly) {
	var correspond, correspond, jetons, type,
		jusqu'à présent, groupes, préfiltres,
		cached = tokenCache[ sélecteur + " " ];

	si (mis en cache) {
		retourner parseOnly ? 0 : cached.slice( 0 );
	}

	jusqu'à présent = sélecteur ;
	groupes = [];
	préFilters = Expr.preFilter;

	tandis que (jusqu'à présent) {

		// Virgule et première exécution
		if ( !matched || ( match = rcomma.exec( jusqu'à présent) ) ) {
			si (correspondance) {

				// Ne considère pas les virgules finales comme valides
				jusqu'à présent = jusqu'à présent.slice( match[ 0 ].length ) || jusqu'à présent;
			}
			groups.push( ( jetons = [] ) );
		}

		correspondant = faux ;

		// Combinateurs
		if ( ( match = rleadingCombinator.exec( jusqu'à présent) ) ) {
			correspondant = match.shift();
			jetons.push( {
				valeur : correspondant,

				// Convertit les combinateurs descendants dans l'espace
				tapez : match[ 0 ].replace( rtrimCSS, " " )
			} );
			jusqu'à présent = jusqu'à présent.slice( matched.length );
		}

		// Filtres
		pour (tapez Expr.filter) {
			if ( ( match = matchExpr[ type ].exec( jusqu'à présent ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				correspondant = match.shift();
				jetons.push( {
					valeur : correspondant,
					tapez: tapez,
					matchs : match
				} );
				jusqu'à présent = jusqu'à présent.slice( matched.length );
			}
		}

		si ( !matched ) {
			casser;
		}
	}

	// Renvoie la longueur de l'excédent invalide
	// si nous sommes juste en train d'analyser
	// Sinon, renvoie une erreur ou renvoie des jetons
	si ( analyseOnly ) {
		retourner jusqu'à présent.length;
	}

	revenir jusqu'à présent ?
		find.error( sélecteur ) :

		// Cache les jetons
		tokenCache( sélecteur, groupes ).slice( 0 );
}

fonction toSelector (jetons) {
	var je = 0,
		len = jetons.longueur,
		sélecteur = "" ;
	pour ( ; je < len; i++ ) {
		sélecteur += jetons[ i ].value ;
	}
	sélecteur de retour ;
}

function addCombinator (matcher, combinateur, base) {
	var dir = combinateur.dir,
		sauter = combinateur.suivant,
		touche = sauter || dir,
		checkNonElements = base && clé === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Vérification par rapport à l'ancêtre/élément précédent le plus proche
		fonction (elem, contexte, xml) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher (elem, contexte, xml);
				}
			}
			renvoie faux ;
		} :

		// Vérification par rapport à tous les éléments ancêtres/précédents
		fonction (elem, contexte, xml) {
			var oldCache, externalCache,
				newCache = [ dirruns, doneName ];

			// Nous ne pouvons pas définir de données arbitraires sur les nœuds XML, ils ne bénéficient donc pas de la mise en cache du combinateur
			si (xml) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						si ( matcher( elem, contexte, xml ) ) {
							renvoie vrai ;
						}
					}
				}
			} autre {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						externalCache = elem[expando] || ( elem[expando ] = {} );

						if ( sauter && nodeName ( elem, sauter ) ) {
							elem = elem[ rép ] || élément;
						} sinon si ( ( oldCache = externalCache[ clé ] ) &&
							oldCache[ 0 ] === répertoires && oldCache[ 1 ] === doneName ) {

							// Attribuer à newCache pour que les résultats se propagent aux éléments précédents
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} autre {

							// Réutilisez le newcache pour que les résultats se propagent aux éléments précédents
							externalCache[ clé ] = newCache;

							// Une correspondance signifie que nous avons terminé ; un échec signifie que nous devons continuer à vérifier
							if ( ( newCache[ 2 ] = matcher( elem, contexte, xml ) ) ) {
								renvoie vrai ;
							}
						}
					}
				}
			}
			renvoie faux ;
		} ;
}

function elementMatcher (matchers) {
	retourner matchers.length > 1 ?
		fonction (elem, contexte, xml) {
			var je = matchers.length;
			alors que je-- ) {
				if ( !matchers[ i ]( elem, contexte, xml ) ) {
					renvoie faux ;
				}
			}
			renvoie vrai ;
		} :
		correspondants[ 0 ];
}

function multipleContexts (sélecteur, contextes, résultats) {
	var je = 0,
		len = contextes.longueur;
	pour ( ; je < len; i++ ) {
		find( sélecteur, contextes[ i ], résultats );
	}
	renvoyer les résultats ;
}

function condense (sans correspondance, carte, filtre, contexte, xml) {
	var élém,
		nouveauUnmatched = [],
		je = 0,
		len = longueur inégalée,
		mappé = carte != null;

	pour ( ; je < len; i++ ) {
		si ( ( elem = sans correspondance [ i ] ) ) {
			if ( !filter || filter( elem, contexte, xml ) ) {
				newUnmatched.push( elem );
				if ( mappé ) {
					map.push( i );
				}
			}
		}
	}

	retourner newUnmatched ;
}

function setMatcher ( préFilter, sélecteur, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction (fonction (graine, résultats, contexte, xml) {
		var temp, je, elem, matcherOut,
			préMap = [],
			postMap = [],
			préexistant = résultats.longueur,

			// Récupère les éléments initiaux de la graine ou du contexte
			éléments = graine ||
				multipleContexts( sélecteur || "*",
					contexte.nodeType ? [ contexte ] : contexte, [] ),

			// Préfiltre pour obtenir l'entrée du matcher, en préservant une carte pour la synchronisation des résultats de départ
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				éléments;

		si ( matcher ) {

			// Si nous avons un postFinder, ou une graine filtrée, ou un postFilter non-graine
			// ou des résultats préexistants,
			matcherOut = postFinder || ( graine ? preFilter : préexistant || postFilter ) ?

				// ...un traitement intermédiaire est nécessaire
				[] :

				// ...sinon utiliser les résultats directement
				résultats;

			// Rechercher des correspondances principales
			matcher( matcherIn, matcherOut, contexte, xml );
		} autre {
			matcherOut = matcherIn;
		}

		// Appliquer le post-filtre
		si ( postFiltre ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], contexte, xml );

			// Supprimez la correspondance des éléments défaillants en les replaçant vers matcherIn
			je = temp.longueur;
			alors que je-- ) {
				si ( ( elem = temp[ je ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		si ( graine ) {
			si ( postFinder || préFilter ) {
				si ( postFinder ) {

					// Obtenez le matcherOut final en condensant cet intermédiaire dans des contextes postFinder
					température = [];
					je = matcherOut.length;
					alors que je-- ) {
						si ( ( elem = matcherOut[ i ] ) ) {

							// Restaurer matcherIn puisque elem n'est pas encore une correspondance finale
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Déplace les éléments correspondants de la graine vers les résultats pour les garder synchronisés
				je = matcherOut.length;
				alors que je-- ) {
					si ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( résultats[ temp ] = elem );
					}
				}
			}

		// Ajout d'éléments aux résultats, via postFinder si défini
		} autre {
			matcherOut = condenser (
				matcherOut === résultats ?
					matcherOut.splice( préexistant, matcherOut.length ) :
					matcherOut
			);
			si ( postFinder ) {
				postFinder( null, résultats, matcherOut, xml );
			} autre {
				push.apply( résultats, matcherOut );
			}
		}
	} );
}

fonction matcherFromTokens (jetons) {
	var checkContext, matcher, j,
		len = jetons.longueur,
		menantRelative = Expr.relative[ jetons[ 0 ].type ],
		implicitRelative = leaderRelative || Expr.relative[ " " ],
		i = leaderRelative ? dix,

		// Le matcher fondamental garantit que les éléments sont accessibles à partir du ou des contextes de niveau supérieur.
		matchContext = addCombinator (fonction (elem) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator (fonction (elem) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ fonction (elem, contexte, xml) {

			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != externalmostContext ) ) || (
				( checkContext = contexte ).nodeType ?
					matchContext( elem, contexte, xml ) :
					matchAnyContext(elem, contexte, xml) );

			// Évitez de vous accrocher à l'élément
			// (voir https://github.com/jquery/sizzle/issues/299)
			checkContext = nul ;
			retour à la retraite;
		} ];

	pour ( ; je < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} autre {
			matcher = Expr.filter[ jetons[ je ].type ].apply( null, jetons[ je ].matches );

			// Renvoie un spécial en voyant un matcher de position
			if ( matcher[expando ] ) {

				// Recherche l'opérateur relatif suivant (le cas échéant) pour une manipulation correcte
				j = ++je;
				pour ( ; j < len; j++ ) {
					if ( Expr.relative[ jetons[ j ].type ] ) {
						casser;
					}
				}
				retourner setMatcher (
					i > 1 && elementMatcher( matchers ),
					je > 1 && versSélecteur(

						// Si le jeton précédent était un combinateur descendant, insérez un élément quelconque implicite `*`
						jetons.slice( 0, i - 1 )
							.concat( { valeur : tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					correspondant,
					je < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector (jetons)
				);
			}
			matchers.push(matcher);
		}
	}

	return elementMatcher( matchers );
}

fonction matcherFromGroupMatchers ( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = fonction (graine, contexte, XML, résultats, le plus externe) {
			var elem, j, matcher,
				matchedCount = 0,
				je = "0",
				sans correspondance = graine && [],
				setMatched = [],
				contextBackup = externalmostContext,

				// Nous devons toujours avoir soit des éléments de départ, soit un contexte le plus externe
				éléments = graine || byElement && Expr.find.TAG( "*", le plus à l'extérieur),

				// Utiliser des répertoires entiers si c'est le correspondant le plus externe
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			si (le plus à l'extérieur) {

				// Prise en charge : IE 11+, Edge 17 - 18+
				// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
				// deux documents ; les comparaisons superficielles fonctionnent.
				// eslint-disable-next-line eqeqeq
				externalmostContext = contexte == document || contexte || le plus extérieur;
			}

			// Ajouter des éléments en passant elementMatchers directement aux résultats
			// Prise en charge : iOS <=7 - 9 uniquement
			// Tolère la correspondance des propriétés NodeList (IE : "length" ; Safari : <number>)
			// éléments par identifiant. (vue trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0 ;

					// Prise en charge : IE 11+, Edge 17 - 18+
					// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
					// deux documents ; les comparaisons superficielles fonctionnent.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( élément );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, contexte || document, xml ) ) {
							push.call( résultats, élément );
							casser;
						}
					}
					si (le plus à l'extérieur) {
						dirruns = dirrunsUnique;
					}
				}

				// Suivre les éléments sans correspondance pour définir les filtres
				si ( parSet ) {

					// Ils auront parcouru tous les matchers possibles
					si ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Allonge le tableau pour chaque élément, correspondant ou non
					si ( graine ) {
						inégalé.push( elem );
					}
				}
			}

			// `i` est maintenant le nombre d'éléments visités ci-dessus, et l'ajoute à `matchedCount`
			// rend ce dernier non négatif.
			matchedCount += je;

			// Appliquer des filtres définis aux éléments sans correspondance
			// REMARQUE : ceci peut être ignoré s'il n'y a aucun élément sans correspondance (c'est-à-dire `matchedCount`
			// est égal à `i`), à moins que nous n'ayons visité _aucun_ élément dans la boucle ci-dessus car nous avons
			// aucun matcheur d'élément et aucune graine.
			// L'incrémentation d'une chaîne initiale "0" `i` permet à `i` de rester une chaîne uniquement dans ce cas
			// cas, ce qui entraînera un "00" `matchedCount` qui diffère de `i` mais est également
			// numériquement zéro.
			if ( bySet && i !== matchedCount ) {
				j = 0 ;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( sans correspondance, setMatched, contexte, xml );
				}

				si ( graine ) {

					// Réintégrer les correspondances d'éléments pour éliminer le besoin de tri
					si ( matchedCount > 0 ) {
						alors que je-- ) {
							if ( !( sans correspondance[ je ] || setMatched[ je ] ) ) {
								setMatched[ i ] = pop.call( résultats );
							}
						}
					}

					// Supprime les valeurs d'espace réservé d'index pour obtenir uniquement les correspondances réelles
					setMatched = condense( setMatched );
				}

				// Ajouter des correspondances aux résultats
				push.apply( résultats, setMatched );

				// Les correspondances d'ensembles sans pépins succédant à plusieurs correspondants réussis stipulent le tri
				if ( le plus externe && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( résultats );
				}
			}

			// Remplace la manipulation des variables globales par les matchers imbriqués
			si (le plus à l'extérieur) {
				dirruns = dirrunsUnique;
				externalmostContext = contexteBackup ;
			}

			retour inégalé ;
		} ;

	retourner parSet ?
		markFunction( superMatcher ) :
		superMatcher ;
}

function compile( sélecteur, match /* Usage interne uniquement */ ) {
	var je,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ sélecteur + " " ];

	si ( !caché ) {

		// Générer une fonction de fonctions récursives pouvant être utilisée pour vérifier chaque élément
		si ( !match ) {
			match = tokenize( sélecteur );
		}
		je = match.longueur;
		alors que je-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( mis en cache[expando ] ) {
				setMatchers.push( mis en cache );
			} autre {
				elementMatchers.push( mis en cache );
			}
		}

		// Cache la fonction compilée
		cached = compilerCache (sélecteur,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Enregistrer le sélecteur et la tokenisation
		cached.selector = sélecteur ;
	}
	retourner en cache ;
}

/**
 * Une fonction de sélection de bas niveau qui fonctionne avec les fichiers compilés de jQuery
 * fonctions du sélecteur
 * @param {String|Function} selector Un sélecteur ou un pré-compilé
 * fonction de sélection construite avec la compilation du sélecteur jQuery
 * Contexte @param {Élément}
 * @param {Array} [résultats]
 * @param {Array} [seed] Un ensemble d'éléments à comparer
 */
function select (sélecteur, contexte, résultats, graine) {
	var i, jetons, jeton, type, trouver,
		compilé = type de sélecteur === "fonction" && sélecteur,
		match = !seed && tokenize( ( selector = compile.selector || selector ) );

	résultats = résultats || [] ;

	// Essayez de minimiser les opérations s'il n'y a qu'un seul sélecteur dans la liste et aucune graine
	// (ce dernier nous garantit le contexte)
	si ( match.length === 1 ) {

		// Réduit le contexte si le sélecteur composé principal est un ID
		jetons = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			contexte = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				contexte
			) || [] )(0 ];
			si ( !contexte ) {
				renvoyer les résultats ;

			// Les comparateurs précompilés vérifieront toujours l'ascendance, alors passez au niveau supérieur
			} else if ( compilé ) {
				contexte = contexte.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Récupère un ensemble de graines pour une correspondance de droite à gauche
		i = matchExpr.needsContext.test( sélecteur ) ? 0 : jetons.longueur;
		alors que je-- ) {
			jeton = jetons[ je ];

			// Abandonner si nous touchons un combinateur
			if ( Expr.relative[ ( type = token.type ) ] ) {
				casser;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Recherche, expansion du contexte pour les principaux combinateurs frères et sœurs
				si ( ( graine = trouver (
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( jetons[ 0 ].type ) &&
						testContext( contexte.parentNode ) || contexte
				) ) ) {

					// Si la graine est vide ou qu'il ne reste aucun jeton, nous pouvons revenir plus tôt
					jetons.splice( i, 1 );
					selector = seed.length && toSelector( jetons );
					si ( !sélecteur ) {
						push.apply( résultats, graine );
						renvoyer les résultats ;
					}

					casser;
				}
			}
		}
	}

	// Compile et exécute une fonction de filtrage si elle n'est pas fournie
	// Fournissez `match` pour éviter la retokenisation si nous avons modifié le sélecteur ci-dessus
	( compilé || compile( sélecteur, correspondance ) )(
		graine,
		contexte,
		!documentIsHTML,
		résultats,
		!contexte || rsibling.test( sélecteur) && testContext( context.parentNode ) || contexte
	);
	renvoyer les résultats ;
}

// Missions ponctuelles

// Prise en charge : Android <=4.0 - 4.1+
// Stabilité du tri
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialisation par rapport au document par défaut
setDocument();

// Prise en charge : Android <=4.0 - 4.1+
// Les nœuds détachés se suivent *les uns les autres* de manière confuse
support.sortDetached = assert( function( el ) {

	// Doit renvoyer 1, mais renvoie 4 (suivant)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = trouver ;

// Obsolète
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Ceux-ci ont toujours été privés, mais ils étaient documentés dans le cadre de
// Sizzle, conservons-les pour l'instant à des fins de compatibilité ascendante.
find.compile = compiler ;
find.select = sélectionner;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
trouver.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort ;

	/* eslint-activer */

} )();


var rép = fonction (elem, rép, jusqu'à) {
	var correspond = [],
		truncate = jusqu'à !== non défini ;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		si ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( jusqu'à ) ) {
				casser;
			}
			matched.push( elem );
		}
	}
	retour correspondant ;
} ;


var frères et sœurs = fonction (n, elem) {
	var correspond = [];

	pour ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	retour correspondant ;
} ;


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Implémente la fonctionnalité identique pour le filtre et non
function winnow (éléments, qualificatif, non) {
	if ( isFunction( qualificatif ) ) {
		return jQuery.grep( éléments, fonction( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Élément unique
	if ( qualifier.nodeType ) {
		return jQuery.grep( éléments, fonction( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Type de tableau d'éléments (jQuery, arguments, Array)
	if ( type de qualificatif !== "string" ) {
		return jQuery.grep( éléments, fonction( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtré directement pour les sélecteurs simples et complexes
	return jQuery.filter (qualificatif, éléments, non);
}

jQuery.filter = fonction (expr, elems, not) {
	var elem = elems[ 0 ];

	sinon ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ élément ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
} ;

jQuery.fn.extend( {
	trouver : fonction (sélecteur) {
		var je, ret,
			len = this.length,
			soi = ceci;

		if ( type de sélecteur !== "string" ) {
			return this.pushStack( jQuery( sélecteur ).filter( function() {
				pour ( je = 0; je < len; je++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						renvoie vrai ;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		pour ( je = 0; je < len; je++ ) {
			jQuery.find( sélecteur, self[ i ], ret );
		}

		retourner len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtre : fonction (sélecteur) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	pas : fonction (sélecteur) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	est : fonction (sélecteur) {
		retourner !!winnow(
			ce,

			// S'il s'agit d'un sélecteur positionnel/relatif, vérifie l'appartenance à l'ensemble renvoyé
			// donc $("p:first").is("p:last") ne retournera pas true pour un document avec deux "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( sélecteur ) :
				sélecteur || [],
			FAUX
		).longueur;
	}
} );


// Initialise un objet jQuery


// Une référence centrale à la racine jQuery(document)
var rootjQuery,

	// Un moyen simple de vérifier les chaînes HTML
	// Priorisez #id sur <tag> pour éviter XSS via location.hash (trac-9521)
	// Reconnaissance HTML stricte (trac-11290 : doit commencer par <)
	// Raccourci simple #id cas pour la vitesse
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = fonction (sélecteur, contexte, racine) {
		var correspond, élément;

		// POIGNÉE : $(""), $(null), $(indéfini), $(false)
		si ( !sélecteur ) {
			rends ceci ;
		}

		// La méthode init() accepte un rootjQuery alternatif
		// pour que la migration puisse prendre en charge jQuery.sub (gh-2101)
		racine = racine || rootjQuery ;

		// Gère les chaînes HTML
		if ( type de sélecteur === "string" ) {
			if ( sélecteur[ 0 ] === "<" &&
				sélecteur[ sélecteur.longueur - 1 ] === ">" &&
				sélecteur.longueur >= 3 ) {

				// Supposons que les chaînes qui commencent et se terminent par <> sont HTML et ignorent la vérification des expressions régulières
				match = [ null, sélecteur, null ];

			} autre {
				match = rquickExpr.exec( sélecteur );
			}

			// Faites correspondre le HTML ou assurez-vous qu'aucun contexte n'est spécifié pour #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// POIGNÉE : $(html) -> $(tableau)
				si ( match[ 1 ] ) {
					contexte = instance de contexte de jQuery ? contexte[ 0 ] : contexte;

					// L'option pour exécuter des scripts est vraie pour la rétro-compatibilité
					// Laisse intentionnellement l'erreur être générée si parseHTML n'est pas présent
					jQuery.merge( ceci, jQuery.parseHTML(
						correspondre[ 1 ],
						contexte && contexte.nodeType ? contexte.ownerDocument || contexte : document,
						vrai
					) );

					// POIGNÉE : $(html, accessoires)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( contexte ) ) {
						pour (correspondance dans le contexte) {

							// Les propriétés du contexte sont appelées comme méthodes si possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( contexte[ match ] );

							// ...et autrement défini comme attributs
							} autre {
								this.attr( match, contexte[ match ] );
							}
						}
					}

					rends ceci ;

				// POIGNÉE : $(#id)
				} autre {
					elem = document.getElementById( match[ 2 ] );

					si ( élément ) {

						// Injecter l'élément directement dans l'objet jQuery
						this[ 0 ] = élément ;
						this.length = 1;
					}
					rends ceci ;
				}

			// POIGNÉE : $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( contexte || racine ).find( sélecteur );

			// POIGNÉE : $(expr, contexte)
			// (ce qui équivaut simplement à : $(context).find(expr)
			} autre {
				return this.constructor( context ).find( selector );
			}

		// POIGNÉE : $(DOMElement)
		} sinon si ( selector.nodeType ) {
			this[ 0 ] = sélecteur ;
			this.length = 1;
			rends ceci ;

		// POIGNÉE : $(fonction)
		// Raccourci pour le document prêt
		} else if ( isFunction( sélecteur ) ) {
			return root.ready !== non défini ?
				root.ready( sélecteur ) :

				// Exécuter immédiatement si prêt n'est pas présent
				sélecteur( jQuery );
		}

		return jQuery.makeArray( sélecteur, this );
	} ;

// Donne à la fonction init le prototype jQuery pour une instanciation ultérieure
init.prototype = jQuery.fn;

// Initialise la référence centrale
rootjQuery = jQuery(document);


var rparentsprev = /^(?:parents|prev(?:Jusqu'à|Tous))/,

	// Méthodes garanties pour produire un ensemble unique en partant d'un ensemble unique
	garantiUnique = {
		enfants : vrai,
		contenu : vrai,
		suivant : vrai,
		précédent : vrai
	} ;

jQuery.fn.extend( {
	a : fonction (cible) {
		var cibles = jQuery (cible, ceci),
			l = cibles.longueur;

		renvoyer this.filter( function() {
			var je = 0;
			pour ( ; je < l; je++ ) {
				if ( jQuery.contains( this, cibles[ i ] ) ) {
					renvoie vrai ;
				}
			}
		} );
	},

	le plus proche : fonction (sélecteurs, contexte) {
		var cur,
			je = 0,
			l = cette.longueur,
			correspondant = [],
			cibles = type de sélecteurs !== "string" && jQuery( sélecteurs );

		// Les sélecteurs de position ne correspondent jamais, car il n'y a pas de contexte de _sélection_
		if ( !rneedsContext.test( sélecteurs ) ) {
			pour ( ; je < l; je++ ) {
				pour ( cur = this[ i ]; cur && cur !== contexte; cur = cur.parentNode ) {

					// Ignore toujours les fragments de document
					if ( cur.nodeType < 11 && ( cibles ?
						cibles.index( cur ) > -1 :

						// Ne transmettez pas de non-éléments à jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, sélecteurs ) ) ) {

						matched.push( cur );
						casser;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Détermine la position d'un élément dans l'ensemble
	index : fonction (élément) {

		// Aucun argument, renvoie l'index dans le parent
		si ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index dans le sélecteur
		if ( type d'élément === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localise la position de l'élément souhaité
		return indexOf.call( ceci,

			// S'il reçoit un objet jQuery, le premier élément est utilisé
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	ajouter : fonction (sélecteur, contexte) {
		renvoie ceci.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( sélecteur, contexte ) )
			)
		);
	},

	addBack : fonction (sélecteur) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( sélecteur )
		);
	}
} );

fonction frère( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	retour cur;
}

jQuery.each( {
	parent : fonction (élément) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : nul ;
	},
	parents : fonction (élément) {
		return dir(elem, "parentNode" );
	},
	parentsJusqu'à : fonction (elem, _i, jusqu'à ) {
		return dir( elem, "parentNode", jusqu'à );
	},
	suivant : fonction (élément) {
		return frère(elem, "nextSibling" );
	},
	précédent : fonction (élément) {
		return frère(elem, "previousSibling" );
	},
	nextAll : fonction (élément) {
		return dir( elem, "nextSibling" );
	},
	prevAll : fonction (élément) {
		return dir( elem, "previousSibling" );
	},
	nextJusqu'à : function( elem, _i, jusqu'à ) {
		return dir( elem, "nextSibling", jusqu'à );
	},
	prevUntil : function( elem, _i, jusqu'à ) {
		return dir( elem, "previousSibling", jusqu'à );
	},
	frères et sœurs : fonction (élément) {
		return frères et sœurs ( ( elem.parentNode || {} ).firstChild, elem );
	},
	enfants : fonction (élément) {
		retourner les frères et sœurs (elem.firstChild) ;
	},
	contenu : fonction (élément) {
		si ( elem.contentDocument != null &&

			// Prise en charge : IE 11+
			// Les éléments <object> sans attribut `data` ont un objet
			// `contentDocument` avec un prototype `null`.
			getProto( elem.contentDocument ) ) {

			retourner elem.contentDocument ;
		}

		// Prise en charge : IE 9 - 11 uniquement, iOS 7 uniquement, navigateur Android <=4.3 uniquement
		// Traitez l'élément de modèle comme un élément normal dans les navigateurs qui
		// ne le supporte pas.
		if ( nodeName( elem, "modèle" ) ) {
			elem = elem.content || élément;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, fonction (nom, fn) {
	jQuery.fn[ nom ] = fonction (jusqu'à, sélecteur) {
		var matched = jQuery.map( this, fn, jusqu'à );

		if ( name.slice( -5 ) !== "Jusqu'à" ) {
			sélecteur = jusqu'à ;
		}

		if ( sélecteur && type de sélecteur === "string" ) {
			matched = jQuery.filter( sélecteur, matched );
		}

		si ( this.length > 1 ) {

			// Supprime les doublons
			if ( !guaranteedUnique[ nom ] ) {
				jQuery.uniqueSort(correspondant);
			}

			// Ordre inversé pour les parents* et les dérivés précédents
			if ( rparentsprev.test( nom ) ) {
				correspondant.reverse();
			}
		}

		return this.pushStack (correspondant);
	} ;
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convertit les options au format chaîne en options au format objet
fonction créerOptions(options) {
	var objet = {} ;
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		objet[drapeau] = vrai ;
	} );
	renvoyer l'objet ;
}

/*
 * Créez une liste de rappel en utilisant les paramètres suivants :
 *
 * options : une liste facultative d'options séparées par des espaces qui changeront la façon dont
 * la liste de rappel se comporte ou un objet option plus traditionnel
 *
 * Par défaut, une liste de rappel agira comme une liste de rappel d'événement et peut être
 * "tiré" plusieurs fois.
 *
 *Options possibles :
 *
 * une fois : garantira que la liste de rappel ne peut être déclenchée qu'une seule fois (comme un différé)
 *
 * mémoire : gardera une trace des valeurs précédentes et appellera tout rappel ajouté
 * après que la liste ait été lancée immédiatement avec le dernier "mémorisé"
 * valeurs (comme un différé)
 *
 * unique : garantira qu'un rappel ne peut être ajouté qu'une seule fois (pas de doublon dans la liste)
 *
 * stopOnFalse : interrompre les appels lorsqu'un rappel renvoie false
 *
 */
jQuery.Callbacks = fonction (options) {

	// Convertit les options du format chaîne en format objet si nécessaire
	// (nous vérifions d'abord le cache)
	options = type d'options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Indicateur pour savoir si la liste est en cours de déclenchement
		cuisson,

		// Dernière valeur de déclenchement pour les listes non oubliables
		mémoire,

		// Indicateur pour savoir si la liste a déjà été déclenchée
		licencié,

		// Drapeau pour empêcher le tir
		fermé à clé,

		// Liste de rappel réelle
		liste = [],

		// File d'attente des données d'exécution pour les listes répétables
		file d'attente = [],

		// Index du rappel en cours de déclenchement (modifié par ajout/suppression si nécessaire)
		Indice de tir = -1,

		// Rappels d'incendie
		feu = fonction() {

			// Appliquer le tir unique
			verrouillé = verrouillé || options.une fois;

			// Exécute les rappels pour toutes les exécutions en attente,
			// respectant les remplacements de shootingIndex et les modifications d'exécution
			tiré = tir = vrai ;
			pour ( ; file d'attente.longueur; shootingIndex = -1 ) {
				mémoire = file d'attente.shift();
				while ( ++firingIndex < list.length ) {

					// Exécuter le rappel et vérifier la résiliation anticipée
					if ( list[fireIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Aller à la fin et oublier les données pour que .add ne se relance pas
						shootingIndex = liste.longueur;
						mémoire = faux ;
					}
				}
			}

			// Oubliez les données si nous en avons fini avec elles
			si ( !options.mémoire ) {
				mémoire = faux ;
			}

			tir = faux ;

			// Faites le ménage si nous avons fini de tirer pour de bon
			si (verrouillé) {

				// Gardez une liste vide si nous avons des données pour de futurs appels d'ajout
				si ( mémoire ) {
					liste = [];

				// Sinon, cet objet est dépensé
				} autre {
					liste = "";
				}
			}
		},

		// Objet de rappels réels
		soi = {

			// Ajout d'un rappel ou d'une collection de rappels à la liste
			ajouter : fonction() {
				si ( liste ) {

					// Si nous avons de la mémoire d'une exécution passée, nous devrions tirer après avoir ajouté
					if ( mémoire && !fire ) {
						shootingIndex = list.length - 1;
						file d'attente.push(mémoire);
					}

					( fonction ajouter ( arguments ) {
						jQuery.each( args, fonction( _, arg ) {
							si ( estFonction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspecter récursivement
								ajouter( argument );
							}
						} );
					} )( arguments );

					if ( mémoire && !fire ) {
						feu();
					}
				}
				rends ceci ;
			},

			// Supprime un rappel de la liste
			supprimer : fonction() {
				jQuery.each( arguments, fonction( _, arg ) {
					indice var ;
					while ( ( index = jQuery.inArray ( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Gérer les index de déclenchement
						si ( index <= shootingIndex ) {
							shootingIndex--;
						}
					}
				} );
				rends ceci ;
			},

			// Vérifiez si un rappel donné est dans la liste.
			// Si aucun argument n'est donné, indique si la liste contient ou non des rappels.
			a : fonction (fn) {
				retourner fn ?
					jQuery.inArray( fn, liste ) > -1 :
					liste.longueur > 0 ;
			},

			// Supprime tous les rappels de la liste
			vide : fonction() {
				si ( liste ) {
					liste = [];
				}
				rends ceci ;
			},

			// Désactive .fire et .add
			// Abandonner toutes les exécutions en cours/en attente
			// Efface tous les rappels et valeurs
			désactiver : fonction() {
				verrouillé = file d'attente = [];
				liste = mémoire = "" ;
				rends ceci ;
			},
			désactivé : fonction() {
				retourner !liste;
			},

			// Désactive .fire
			// Désactivez également .add sauf si nous avons de la mémoire (car cela n'aurait aucun effet)
			// Abandonner toutes les exécutions en attente
			verrouiller : fonction() {
				verrouillé = file d'attente = [];
				if ( !memory && !firing ) {
					liste = mémoire = "" ;
				}
				rends ceci ;
			},
			verrouillé : fonction() {
				retour !!verrouillé ;
			},

			// Appelez tous les rappels avec le contexte et les arguments donnés
			fireWith : fonction (contexte, arguments) {
				si ( !verrouillé ) {
					arguments = arguments || [] ;
					args = [contexte, args.slice ? args.slice() : args];
					file d'attente.push( args );
					si ( ! tir ) {
						feu();
					}
				}
				rends ceci ;
			},

			// Appelle tous les rappels avec les arguments donnés
			feu : fonction() {
				self.fireWith( ceci, arguments );
				rends ceci ;
			},

			// Pour savoir si les callbacks ont déjà été appelés au moins une fois
			tiré : fonction() {
				revenir !!tiré;
			}
		} ;

	revenir soi-même;
} ;


fonction Identité( v ) {
	retourner v ;
}
fonction Lanceur( ex ) {
	jeter ex;
}

function adoptValue (valeur, résolution, rejet, noValue) {
	méthode var ;

	essayer {

		// Vérifier d'abord l'aspect promesse pour privilégier le comportement synchrone
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( valeur ).done( résolution ).fail( rejet );

		//Autres alorsables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call(valeur, résolution, rejet);

		// Autres non-puisables
		} autre {

			// Contrôlez les arguments `resolve` en laissant Array#slice convertir le booléen `noValue` en entier :
			// * false : [ valeur ].slice( 0 ) => résoudre ( valeur )
			// * vrai : [ valeur ].slice( 1 ) => solve()
			solve.apply( non défini, [ valeur ].slice( noValue ) );
		}

	// Pour Promises/A+, convertissez les exceptions en rejets
	// Puisque jQuery.when ne déballe pas les éléments, nous pouvons ignorer les vérifications supplémentaires apparaissant dans
	// Deferred#then pour supprimer le rejet de manière conditionnelle.
	} capture (valeur) {

		// Prise en charge : Android 4.0 uniquement
		// Les fonctions en mode strict invoquées sans .call/.apply obtiennent le contexte de l'objet global
		rejeter.apply( non défini, [ valeur ] );
	}
}

jQuery.extend( {

	Différé : fonction ( func ) {
		var tuples = [

				// action, ajout d'un écouteur, rappels,
				// ... .then gestionnaires, index d'argument, [état final]
				[ "notifier", "progress", jQuery.Callbacks( "mémoire" ),
					jQuery.Callbacks( "mémoire" ), 2 ],
				[ "résoudre", "terminé", jQuery.Callbacks( "une fois la mémoire" ),
					jQuery.Callbacks( "une fois la mémoire" ), 0, "résolu" ],
				[ "rejeter", "échouer", jQuery.Callbacks( "une fois la mémoire" ),
					jQuery.Callbacks( "une fois la mémoire" ), 1, "rejeté" ]
			],
			état = "en attente",
			promesse = {
				fonction d'état() {
					état de retour ;
				},
				toujours : fonction() {
					deferred.done( arguments ).fail( arguments );
					rends ceci ;
				},
				"catch": fonction (fn) {
					return promise.then( null, fn );
				},

				// Conserver le tube pour la rétro-compatibilité
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments ;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, fonction( _i, tuple ) {

							// Mapper les tuples (progression, terminé, échec) en arguments (terminé, échec, progression)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { se lier à newDefer ou newDefer.notify })
							// deferred.done(function() { se lier à newDefer ou newDefer.resolve })
							// deferred.fail(function() { se lier à newDefer ou newDefer.reject })
							différé[ tuple[ 1 ] ]( function() {
								var renvoyé = fn && fn.apply( this, arguments );
								if ( return && isFunction ( return.promise ) ) {
									retourné.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} autre {
									newDefer[ tuple[ 0 ] + "Avec" ](
										ce,
										fn ? [renvoyé] : arguments
									);
								}
							} );
						} );
						fns = nul ;
					} ).promesse();
				},
				alors : fonction (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function solve (profondeur, différé, gestionnaire, spécial) {
						fonction de retour() {
							var ça = ceci,
								arguments = arguments,
								couldThrow = fonction() {
									Var revint alors ;

									// Support : Promesses/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorer les tentatives de double résolution
									si ( profondeur < maxDepth ) {
										retour;
									}

									retourné = handler.apply( that, args );

									// Support : Promesses/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( renvoyé === différé.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Prise en charge : Promesses/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Récupère `then` une seule fois
									puis = renvoyé &&

										// Support : Promesses/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Vérifie uniquement la viabilité des objets et des fonctions
										( typeof renvoyé === "objet" ||
											typeof renvoyé === "fonction" ) &&
										revenu.puis;

									// Gérer un thenable renvoyé
									si ( estFonction( alors ) ) {

										// Les processeurs spéciaux (notifier) ​​attendent juste la résolution
										si (spécial) {
											alors.appel(
												revenu,
												résoudre (maxDepth, différé, Identité, spécial),
												résoudre (maxDepth, différé, lanceur, spécial)
											);

										// Les processeurs normaux (resolve) s'accrochent également à la progression
										} autre {

											// ...et ignore les anciennes valeurs de résolution
											maxDepth++;

											alors.appel(
												revenu,
												résoudre (maxDepth, différé, Identité, spécial),
												résoudre (maxDepth, différé, lanceur, spécial),
												résoudre (maxDepth, différé, identité,
													différé.notifyWith )
											);
										}

									// Gère toutes les autres valeurs renvoyées
									} autre {

										// Seuls les gestionnaires de remplacement transmettent le contexte
										// et plusieurs valeurs (comportement non spécifié)
										if ( gestionnaire !== Identité ) {
											ça = indéfini ;
											args = [renvoyé];
										}

										// Traite la ou les valeurs
										// Le processus par défaut est résolu
										( spécial || deferred.resolveWith )( ça, arguments );
									}
								},

								// Seuls les processeurs normaux (résolvent) interceptent et rejettent les exceptions
								processus = spécial ?
									pourraitLancer :
									fonction() {
										essayer {
											pourraitThrow();
										} attraper ( e ) {

											si ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													processus.erreur );
											}

											// Support : Promesses/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorer les exceptions post-résolution
											si ( profondeur + 1 >= maxDepth ) {

												// Seuls les gestionnaires de remplacement transmettent le contexte
												// et plusieurs valeurs (comportement non spécifié)
												if ( gestionnaire !== Lanceur ) {
													ça = indéfini ;
													arguments = [ e ];
												}

												deferred.rejectWith( ça, arguments );
											}
										}
									} ;

							// Support : Promesses/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promet immédiatement d'éviter les faux rejets de
							// erreurs suivantes
							si (profondeur) {
								processus();
							} autre {

								// Appel d'un hook optionnel pour enregistrer l'erreur, en cas d'exception
								// puisqu'il est autrement perdu lorsque l'exécution devient asynchrone
								si ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// L'alias obsolète de ce qui précède. Même si le nom suggère
								// renvoie la pile, pas une instance d'erreur, jQuery passe simplement
								// directement vers `console.warn` pour que les deux fonctionnent ; un exemple
								// coopère simplement mieux avec les cartes sources.
								} sinon si ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(processus);
							}
						} ;
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							résoudre(
								0,
								nouveauDifférer,
								estFonction( onProgress ) ?
									en cours :
									Identité,
								newDefer.notifyWith
							)
						);

						// rempli_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							résoudre(
								0,
								nouveauDifférer,
								estFonction( onFulfilled ) ?
									onRéalisé :
									Identité
							)
						);

						// rejeté_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							résoudre(
								0,
								nouveauDifférer,
								isFunction( onRejected ) ?
									surRejeté :
									Lanceur
							)
						);
					} ).promesse();
				},

				// Obtenez une promesse pour ce différé
				// Si obj est fourni, l'aspect promesse est ajouté à l'objet
				promesse : fonction (obj) {
					return obj != null ? jQuery.extend( obj, promesse ) : promesse;
				}
			},
			différé = {} ;

		// Ajout de méthodes spécifiques à la liste
		jQuery.each(tuples, fonction(i, tuple) {
			var liste = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promesse.progress = liste.ajouter
			// promesse.done = liste.ajouter
			// promesse.fail = liste.ajouter
			promesse[ tuple[ 1 ] ] = list.add;

			// Etat du handle
			si ( chaîne d'état ) {
				list.add(
					fonction() {

						// état = "résolu" (c'est-à-dire rempli)
						// état = "rejeté"
						état = chaîne d'état ;
					},

					// rejeté_callbacks.disable
					// rempli_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejeté_handlers.disable
					// rempli_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// rempli_handlers.fire
			// rejeté_handlers.fire
			list.add( tuple[ 3 ].fire );

			// différé.notify = function() { différé.notifyWith(...) }
			// différé.resolve = function() { différé.resolveWith(...) }
			// différé.reject = function() { différé.rejectWith(...) }
			différé[ tuple[ 0 ] ] = fonction() {
				différé[ tuple[ 0 ] + "Avec" ]( this === différé ? indéfini : this, arguments );
				rends ceci ;
			} ;

			// différé.notifyWith = list.fireWith
			// différé.resolveWith = list.fireWith
			// différé.rejectWith = list.fireWith
			différé[ tuple[ 0 ] + "Avec" ] = list.fireWith;
		} );

		// Faire du différé une promesse
		promise.promise(différé);

		// Appel à la fonction donnée, le cas échéant
		si ( fonction ) {
			func.call( différé, différé );
		}

		// Terminé!
		retour différé;
	},

	// Assistant différé
	quand : fonction (valeur unique) {
		var

			// nombre de subordonnés inachevés
			restant = arguments.longueur,

			// nombre d'arguments non traités
			je = restant,

			// données d'exécution subordonnées
			solveContexts = Tableau( je ),
			solveValues ​​= tranche.call( arguments ),

			// le Différé principal
			primaire = jQuery.Deferred(),

			// usine de rappel subordonnée
			updateFunc = fonction ( je ) {
				fonction de retour (valeur) {
					solveContexts[ je ] = ceci ;
					solveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : valeur;
					si ( !( --restant ) ) {
						primaire.resolveWith( solveContexts, solveValues ​​);
					}
				} ;
			} ;

		// Les arguments simples et vides sont adoptés comme Promise.resolve
		si ( restant <= 1 ) {
			adoptValue( singleValue, Primary.done( updateFunc( i ) ).resolve, Primary.reject,
				!restant );

			// Utilisez .then() pour déballer les thenables secondaires (cf. gh-3000)
			if (primary.state() === "en attente" ||
				isFunction( solveValues[ i ] && solveValues[ i ].then ) ) {

				retourner primaire.then();
			}
		}

		// Plusieurs arguments sont agrégés comme les éléments du tableau Promise.all
		alors que je-- ) {
			adoptValue( solveValues[ i ], updateFunc( i ), primaire.reject );
		}

		retourner primaire.promise();
	}
} );


// Ceux-ci indiquent généralement une erreur du programmeur lors du développement,
// les avertit dès que possible plutôt que de les avaler par défaut.
var rerrorNames = /^(Eval|Internal|Plage|Référence|Syntaxe|Type|URI)Error$/;

// Si `jQuery.Deferred.getErrorHook` est défini, `asyncError` est une erreur
// capturé avant la barrière asynchrone pour obtenir la cause d'erreur d'origine
// qui pourrait autrement être masqué.
jQuery.Deferred.exceptionHook = function (erreur, asyncError) {

	// Prise en charge : IE 8 - 9 uniquement
	// La console existe lorsque les outils de développement sont ouverts, ce qui peut arriver à tout moment
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "Exception jQuery.Deferred : " + error.message,
			error.stack, asyncError );
	}
} ;




jQuery.readyException = fonction (erreur) {
	window.setTimeout( fonction() {
		erreur de lancement ;
	} );
} ;




// Le différé utilisé sur DOM prêt
var readyList = jQuery.Deferred();

jQuery.fn.ready = fonction (fn) {

	liste prête
		.puis( fn )

		// Enveloppe jQuery.readyException dans une fonction afin que la recherche
		// se produit au moment de la gestion des erreurs au lieu du rappel
		// inscription.
		.catch( fonction( erreur ) {
			jQuery.readyException(erreur);
		} );

	rends ceci ;
} ;

jQuery.extend( {

	// Le DOM est-il prêt à être utilisé ? Défini sur true une fois que cela se produit.
	isReady : faux,

	// Un compteur pour suivre le nombre d'éléments à attendre avant
	// l'événement ready se déclenche. Voir trac-6781
	prêtAttendez : 1,

	// Gère quand le DOM est prêt
	prêt : fonction (attendre) {

		// Abandonner s'il y a des réservations en attente ou si nous sommes déjà prêts
		if ( attendre === true ? --jQuery.readyWait : jQuery.isReady ) {
			retour;
		}

		// N'oubliez pas que le DOM est prêt
		jQuery.isReady = vrai ;

		// Si un événement DOM Ready normal est déclenché, décrémentez et attendez si nécessaire
		if ( attendez !== true && --jQuery.readyWait > 0 ) {
			retour;
		}

		// S'il y a des fonctions liées, à exécuter
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// Le gestionnaire d'événements prêt et la méthode d'auto-nettoyage
fonction terminée() {
	document.removeEventListener( "DOMContentLoaded", terminé );
	window.removeEventListener( "load", terminé );
	jQuery.ready();
}

// Capture les cas où $(document).ready() est appelé
// après que l'événement du navigateur s'est déjà produit.
// Prise en charge : IE <=9 - 10 uniquement
// Les anciens IE signalent parfois "interactif" trop tôt
if ( document.readyState === "complet" ||
	( document.readyState !== "chargement" && !document.documentElement.doScroll ) ) {

	// Gérez-le de manière asynchrone pour permettre aux scripts de retarder leur préparation
	window.setTimeout( jQuery.ready );

} autre {

	// Utilisez le rappel d'événement pratique
	document.addEventListener( "DOMContentLoaded", terminé );

	// Un repli vers window.onload, qui fonctionnera toujours
	window.addEventListener( "load", terminé );
}




// Méthode multifonctionnelle pour obtenir et définir les valeurs d'une collection
// La ou les valeurs peuvent éventuellement être exécutées s'il s'agit d'une fonction
var access = fonction (elems, fn, clé, valeur, chaînable, videGet, brut) {
	var je = 0,
		len = elems.longueur,
		en vrac = clé == null ;

	// Définit plusieurs valeurs
	if ( toType( clé ) === "objet" ) {
		chaînable = vrai ;
		pour ( i en clé ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Définit une valeur
	} else if ( valeur !== non défini ) {
		chaînable = vrai ;

		si ( !isFunction( valeur ) ) {
			brut = vrai ;
		}

		si (en vrac) {

			// Opérations groupées exécutées sur l'ensemble entier
			si (brut) {
				fn.call( éléments, valeur );
				fn = nul ;

			// ...sauf lors de l'exécution des valeurs de fonction
			} autre {
				en vrac = fn ;
				fn = fonction (elem, _key, valeur) {
					return vrac.call( jQuery( elem ), valeur );
				} ;
			}
		}

		si ( fn ) {
			pour ( ; je < len; i++ ) {
				fn(
					elems[ i ], clé, brut ?
						valeur :
						valeur.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chaînable ) {
		retourner les éléments ;
	}

	// Obtient
	si (en vrac) {
		return fn.call( elems );
	}

	retour len ? fn( elems[ 0 ], clé ) : videGet;
} ;


// Correspond à une chaîne en pointillés pour la camélisation
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Utilisé par camelCase comme rappel pour remplacer()
function fcamelCase( _all, lettre ) {
	return letter.toUpperCase();
}

// Convertit les tirets en camelCase ; utilisé par les modules CSS et data
// Prise en charge : IE <=9 - 11, Edge 12 - 15
// Microsoft a oublié d'indiquer le préfixe de son fournisseur (trac-9572)
fonction camelCase( chaîne ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = fonction (propriétaire) {

	// Accepte uniquement :
	// - Nœud
	// - Noeud.ELEMENT_NODE
	// - Noeud.DOCUMENT_NODE
	// - Objet
	// - N'importe lequel
	retourner propriétaire.nodeType === 1 || propriétaire.nodeType === 9 || !( +owner.nodeType );
} ;




fonction Données() {
	this.expando = jQuery.expando + Data.uid++;
}

Données.uid = 1 ;

Données.prototype = {

	cache : fonction (propriétaire) {

		// Vérifie si l'objet propriétaire a déjà un cache
		var valeur = propriétaire[ this.expando ];

		// Sinon, crée-en un
		si ( !valeur ) {
			valeur = {} ;

			// Nous pouvons accepter des données pour les nœuds non-élémentaires dans les navigateurs modernes,
			// mais nous ne devrions pas le faire, voir trac-8335.
			// Renvoie toujours un objet vide.
			if ( acceptData (propriétaire) ) {

				// S'il s'agit d'un nœud peu susceptible d'être stringifié ou bouclé
				// utilise une affectation simple
				if ( propriétaire.nodeType ) {
					propriétaire[ this.expando ] = valeur ;

				// Sinon, sécurisez-le dans une propriété non énumérable
				// configurable doit être vrai pour permettre à la propriété d'être
				// supprimé lorsque les données sont supprimées
				} autre {
					Object.defineProperty (propriétaire, this.expando, {
						valeur : valeur,
						configurable : vrai
					} );
				}
			}
		}

		valeur de retour ;
	},
	set : fonction (propriétaire, données, valeur) {
		var accessoire,
			cache = this.cache( propriétaire );

		// Handle : [propriétaire, clé, valeur] arguments
		// Utilisez toujours la clé camelCase (gh-2257)
		if ( type de données === "string" ) {
			cache[ camelCase( data ) ] = valeur;

		// Handle : [propriétaire, {propriétés}] arguments
		} autre {

			// Copie les propriétés une par une dans l'objet cache
			pour ( accessoire dans les données ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		retourner le cache ;
	},
	get : fonction (propriétaire, clé) {
		touche de retour === non défini ?
			this.cache(propriétaire) :

			// Utilisez toujours la clé camelCase (gh-2257)
			propriétaire[ this.expando ] && propriétaire[ this.expando ][ camelCase( key ) ];
	},
	accès : fonction (propriétaire, clé, valeur) {

		// Dans les cas où :
		//
		// 1. Aucune clé n'a été spécifiée
		// 2. Une clé de chaîne a été spécifiée, mais aucune valeur n'est fournie
		//
		// Prend le chemin "read" et laisse la méthode get déterminer
		// quelle valeur renvoyer, respectivement soit :
		//
		// 1. L'objet cache entier
		// 2. Les données stockées à la clé
		//
		if ( clé === non défini ||
				( ( clé && type de clé === "chaîne" ) && valeur === non défini ) ) {

			return this.get (propriétaire, clé);
		}

		// Lorsque la clé n'est pas une chaîne, ou à la fois une clé et une valeur
		// sont spécifiés, définis ou étendus (objets existants) avec soit :
		//
		// 1. Un objet de propriétés
		// 2. Une clé et une valeur
		//
		this.set( propriétaire, clé, valeur );

		// Puisque le chemin "set" peut avoir deux points d'entrée possibles
		// renvoie les données attendues en fonction du chemin emprunté[*]
		valeur de retour !== non défini ? valeur : clé ;
	},
	supprimer : fonction (propriétaire, clé) {
		var je,
			cache = propriétaire[ this.expando ];

		if ( cache === non défini ) {
			retour;
		}

		if ( clé !== non défini ) {

			// Prise en charge d'un tableau ou d'une chaîne de clés séparées par des espaces
			si ( Array.isArray( clé ) ) {

				// Si key est un tableau de clés...
				// Nous définissons toujours les clés camelCase, alors supprimez-les.
				key = key.map( camelCase );
			} autre {
				clé = camelCase( clé );

				// Si une clé avec les espaces existe, utilisez-la.
				// Sinon, créez un tableau en faisant correspondre des espaces non blancs
				key = clé en cache ?
					[ clé ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			je = clé.longueur;

			alors que je-- ) {
				supprimer le cache[ clé[ i ] ];
			}
		}

		// Supprime l'expando s'il n'y a plus de données
		if ( clé === non défini || jQuery.isEmptyObject( cache ) ) {

			// Prise en charge : Chrome <=35 - 45
			// Les performances de Webkit & Blink souffrent lors de la suppression de propriétés
			// à partir des nœuds DOM, donc défini sur non défini à la place
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restreint)
			if ( propriétaire.nodeType ) {
				propriétaire[ this.expando ] = non défini ;
			} autre {
				supprimer le propriétaire[ this.expando ] ;
			}
		}
	},
	hasData : fonction (propriétaire) {
		var cache = propriétaire[ this.expando ];
		return cache !== non défini && !jQuery.isEmptyObject( cache );
	}
} ;
var dataPriv = new Data();

var dataUser = new Data();



// Résumé de l'implémentation
//
// 1. Appliquer la surface de l'API et la compatibilité sémantique avec la branche 1.9.x
// 2. Améliorer la maintenabilité du module en réduisant le stockage
// chemins vers un seul mécanisme.
// 3. Utilisez le même mécanisme unique pour prendre en charge les données « privées » et « utilisateur ».
// 4. _Ne jamais_ exposer les données "privées" au code utilisateur (TODO : Drop _data, _removeData)
// 5. Évitez d'exposer les détails d'implémentation sur les objets utilisateur (par exemple, les propriétés expando)
// 6. Fournir un chemin clair pour la mise à niveau de la mise en œuvre vers WeakMap en 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /?[AZ]/g;

fonction getData(données) {
	si ( données === "vrai" ) {
		renvoie vrai ;
	}

	si ( données === "faux" ) {
		renvoie faux ;
	}

	si ( données === "null" ) {
		renvoie null ;
	}

	// Convertit uniquement en nombre si cela ne change pas la chaîne
	si ( données === +données + "" ) {
		renvoyer +données ;
	}

	si ( rbrace.test( données ) ) {
		retourner JSON.parse( données );
	}

	renvoyer des données ;
}

fonction dataAttr (élément, clé, données) {
	nom de la variable ;

	// Si rien n'a été trouvé en interne, essayez d'en récupérer
	// données de l'attribut HTML5 data-*
	if ( data === non défini && elem.nodeType === 1 ) {
		nom = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( nom );

		if ( type de données === "string" ) {
			essayer {
				données = getData( données );
			} attraper ( e ) {}

			// Assurez-vous que nous définissons les données pour qu'elles ne soient pas modifiées plus tard
			dataUser.set( élément, clé, données );
		} autre {
			données = non défini ;
		}
	}
	renvoyer des données ;
}

jQuery.extend( {
	hasData : fonction (élément) {
		retourner dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	données : fonction (élément, nom, données) {
		return dataUser.access( elem, nom, données );
	},

	RemoveData : fonction (élément, nom) {
		dataUser.remove( élément, nom );
	},

	// TODO : Maintenant que tous les appels à _data et _removeData ont été remplacés
	// avec des appels directs aux méthodes dataPriv, celles-ci peuvent être obsolètes.
	_data : fonction (élément, nom, données) {
		return dataPriv.access( elem, nom, données );
	},

	_removeData : fonction (élément, nom) {
		dataPriv.remove( elem, nom );
	}
} );

jQuery.fn.extend( {
	données : fonction (clé, valeur) {
		var i, nom, données,
			elem = ceci[ 0 ],
			attrs = elem && elem.attributes;

		// Récupère toutes les valeurs
		if ( clé === non défini ) {
			si ( cette.longueur ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					je = attrs.longueur;
					alors que je-- ) {

						// Prise en charge : IE 11 uniquement
						// Les éléments attrs peuvent être nuls (trac-14894)
						si ( attrs[ je ] ) {
							nom = attrs[ je ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								nom = camelCase( nom.slice( 5 ) );
								dataAttr( elem, nom, data[ nom ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			renvoyer des données ;
		}

		// Définit plusieurs valeurs
		if ( type de clé === "objet" ) {
			renvoie this.each( function() {
				dataUser.set( ceci, clé );
			} );
		}

		retourner l'accès (this, fonction (valeur) {
			données var ;

			// L'objet jQuery appelant (correspondances d'éléments) n'est pas vide
			// (et a donc un élément qui apparaît à this[ 0 ]) et le
			// Le paramètre `value` n'était pas indéfini. Un objet jQuery vide
			// entraînera `undefined` pour elem = this[ 0 ] ce qui
			// lève une exception si une tentative de lecture d'un cache de données est effectuée.
			if ( elem && valeur === non défini ) {

				// Tentative d'obtenir des données du cache
				// La clé sera toujours camelCased dans Data
				data = dataUser.get( elem, clé );
				si ( données !== non défini ) {
					renvoyer des données ;
				}

				// Tentative de "découvrir" les données dans
				// Données personnalisées HTML5-* attrs
				data = dataAttr( élément, clé );
				si ( données !== non défini ) {
					renvoyer des données ;
				}

				// Nous avons vraiment essayé, mais les données n'existent pas.
				retour;
			}

			// Définir les données...
			this.each( fonction() {

				// Nous stockons toujours la clé camelCased
				dataUser.set( this, clé, valeur );
			} );
		}, null, valeur, arguments.length > 1, null, true );
	},

	RemoveData : fonction (clé) {
		renvoie this.each( function() {
			dataUser.remove( this, clé );
		} );
	}
} );


jQuery.extend( {
	file d'attente : fonction (élément, type, données) {
		file d'attente var ;

		si ( élément ) {
			type = ( tapez || "fx" ) + "file d'attente";
			file d'attente = dataPriv.get( elem, tapez );

			// Accélérez le retrait de la file d'attente en sortant rapidement s'il ne s'agit que d'une recherche
			si ( données ) {
				if ( !queue || Array.isArray( données ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} autre {
					file d'attente.push( données );
				}
			}
			file d'attente de retour || [] ;
		}
	},

	retirer la file d'attente : fonction (élément, type) {
		tapez = tapez || « effet » ;

		var file d'attente = jQuery.queue( elem, tapez ),
			startLength = file d'attente.longueur,
			fn = file d'attente.shift(),
			hooks = jQuery._queueHooks( elem, tapez ),
			suivant = fonction() {
				jQuery.dequeue( elem, tapez );
			} ;

		// Si la file d'attente fx est retirée de la file d'attente, supprimez toujours la sentinelle de progression
		if ( fn === "en cours" ) {
			fn = file d'attente.shift();
			startLength--;
		}

		si ( fn ) {

			// Ajout d'une sentinelle de progression pour empêcher la file d'attente fx d'être
			// automatiquement retiré de la file d'attente
			si ( tapez === "fx" ) {
				queue.unshift( "en cours" );
			}

			// Efface la dernière fonction d'arrêt de file d'attente
			supprimer hooks.stop ;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && crochets ) {
			crochets.empty.fire();
		}
	},

	// Non public - génère un objet queueHooks ou renvoie l'objet actuel
	_queueHooks : fonction (élément, type) {
		clé var = type + "queueHooks" ;
		return dataPriv.get( elem, clé ) || dataPriv.access( elem, clé, {
			vide : jQuery.Callbacks( "une fois la mémoire" ).add( function() {
				dataPriv.remove( elem, [ type + "file d'attente", clé ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	file d'attente : fonction (type, données) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			données = type ;
			tapez = "fx" ;
			setter--;
		}

		si ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], tapez );
		}

		renvoyer des données === non défini ?
			ce :
			this.each( fonction() {
				var file d'attente = jQuery.queue(this, type, data);

				// Garantit un hook pour cette file d'attente
				jQuery._queueHooks( ceci, tapez );

				if ( tapez === "fx" && queue[ 0 ] !== "en cours" ) {
					jQuery.dequeue( ceci, tapez );
				}
			} );
	},
	retirer la file d'attente : fonction (type) {
		renvoie this.each( function() {
			jQuery.dequeue( ceci, tapez );
		} );
	},
	clearQueue : fonction (type) {
		return this.queue( tapez || "fx", [] );
	},

	// Obtenez une promesse résolue lorsque les files d'attente d'un certain type
	// sont vidés (fx est le type par défaut)
	promesse : fonction (type, obj) {
		vartmp,
			compte = 1,
			différer = jQuery.Deferred(),
			éléments = ceci,
			je = cette.longueur,
			résoudre = fonction() {
				si ( !( --count ) ) {
					defer.resolveWith( éléments, [ éléments ] );
				}
			} ;

		if ( typeof type !== "string" ) {
			obj = type ;
			type = non défini ;
		}
		tapez = tapez || « effet » ;

		alors que je-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			si ( tmp && tmp.empty ) {
				compte++;
				tmp.empty.add( résoudre );
			}
		}
		résoudre();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Haut", "Droite", "Bas", "Gauche" ];

var documentElement = document.documentElement;



	var isAttached = fonction (elem) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composé = { composé : vrai } ;

	// Prise en charge : IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 uniquement
	// Vérifiez la pièce jointe au-delà des limites du Shadow DOM lorsque cela est possible (gh-3504)
	// Prise en charge : iOS 10.0-10.2 uniquement
	// Les premières versions d'iOS 10 prennent en charge `attachShadow` mais pas `getRootNode`,
	// conduisant à des erreurs. Nous devons vérifier `getRootNode`.
	si ( documentElement.getRootNode ) {
		isAttached = fonction (elem) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode (composé) === elem.ownerDocument;
		} ;
	}
var isHiddenWithinTree = fonction (elem, el) {

		// isHiddenWithinTree peut être appelé depuis la fonction jQuery#filter ;
		// dans ce cas, l'élément sera le deuxième argument
		elem = el || élément;

		// Le style en ligne l'emporte sur tout
		return elem.style.display === "aucun" ||
			elem.style.display === "" &&

			// Sinon, vérifie le style calculé
			// Prise en charge : Firefox <=43 - 45
			// Les éléments déconnectés peuvent avoir un affichage calculé : aucun, donc confirmez d'abord que elem est
			// dans le document.
			estAttaché( elem ) &&

			jQuery.css( elem, "display" ) === "aucun";
	} ;



fonction ajusterCSS (elem, prop, valueParts, tween) {
	var ajusté, échelle,
		maxItérations = 20,
		valeuractuelle = entre ?
			fonction() {
				return tween.cur();
			} :
			fonction() {
				return jQuery.css( elem, prop, "" );
			},
		initiale = valeuractuelle(),
		unité = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Le calcul de la valeur de départ est requis pour les incompatibilités potentielles d'unités
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unité !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unité ) {

		// Prise en charge : Firefox <=54
		// Réduire de moitié la valeur cible de l'itération pour éviter les interférences des limites supérieures CSS (gh-2144)
		initiale = initiale / 2 ;

		// Unités de confiance signalées par jQuery.css
		unité = unité || initialInUnit[ 3 ];

		// Approche itérative à partir d'un point de départ non nul
		initialInUnit = +initial || 1;

		while ( maxItérations-- ) {

			// Évaluer et mettre à jour notre meilleure estimation (en doublant les suppositions qui sont nulles).
			// Terminez si l'échelle est égale ou dépasse 1 (ce qui rend l'ancien*nouveau produit non positif).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxItérations = 0 ;
			}
			initialInUnit = initialInUnit / échelle ;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Assurez-vous de mettre à jour les propriétés d'interpolation plus tard
		valueParts = valueParts || [] ;
	}

	si (valueParts) {
		initialInUnit = +initialInUnit || +initiale || 0 ;

		// Appliquer le décalage relatif (+=/-=) si spécifié
		ajusté = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		si ( entre ) {
			entre.unité = unité ;
			tween.start = initialInUnit;
			tween.end = ajusté ;
		}
	}
	rendement ajusté ;
}


var defaultDisplayMap = {};

fonction getDefaultDisplay( elem ) {
	température variable,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[nodeName];

	si (afficher) {
		affichage de retour ;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "affichage" );

	temp.parentNode.removeChild( temp );

	if ( display === "aucun" ) {
		display = "bloc" ;
	}
	defaultDisplayMap[ nodeName ] = affichage ;

	affichage de retour ;
}

function showHide (éléments, show) {
	affichage var, élément,
		valeurs = [],
		indice = 0,
		longueur = éléments.longueur;

	// Détermine la nouvelle valeur d'affichage pour les éléments qui doivent changer
	pour ( ; index < longueur; index++ ) {
		elem = éléments[ index ];
		si ( !elem.style ) {
			continuer;
		}

		display = elem.style.display;
		si (afficher) {

			// Puisque nous forçons la visibilité sur les éléments masqués en cascade, un effet immédiat (et lent)
			// une vérification est requise dans cette première boucle sauf si nous avons une valeur d'affichage non vide (soit
			// en ligne ou sur le point d'être restauré)
			if ( display === "aucun" ) {
				valeurs[ index ] = dataPriv.get( elem, "display" ) || nul;
				si ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valeurs[ index ] = getDefaultDisplay( elem );
			}
		} autre {
			if ( display !== "aucun" ) {
				valeurs[ index ] = "aucun" ;

				// Rappelez-vous ce que nous écrasons
				dataPriv.set( elem, "affichage", affichage );
			}
		}
	}

	// Définit l'affichage des éléments dans une deuxième boucle pour éviter une redistribution constante
	pour ( index = 0 ; index < longueur ; index++ ) {
		si ( valeurs[ index ] != null ) {
			éléments[ index ].style.display = valeurs[ index ];
		}
	}

	renvoyer des éléments ;
}

jQuery.fn.extend( {
	afficher : fonction() {
		return showHide(this, true);
	},
	cacher : fonction() {
		return showHide(this);
	},
	bascule : fonction (état) {
		if ( type d'état === "booléen" ) {
			état de retour ? this.show() : this.hide();
		}

		renvoie this.each( function() {
			si ( isHiddenWithinTree ( ceci ) ) {
				jQuery(ce).show();
			} autre {
				jQuery(ce).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( fonction() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Prise en charge : Android 4.0 - 4.3 uniquement
	// Vérifiez l'état perdu si le nom est défini (trac-11217)
	// Prise en charge : applications Web Windows (WWA)
	// `name` et `type` doivent utiliser .setAttribute pour WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "vérifié", "vérifié" );
	input.setAttribute( "nom", "t" );

	div.appendChild( entrée );

	// Prise en charge : Android <=4.1 uniquement
	// L'ancien WebKit ne clone pas correctement l'état vérifié dans les fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Prise en charge : IE <=11 uniquement
	// Assurez-vous que la zone de texte (et la case à cocher) defaultValue est correctement clonée
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Prise en charge : IE <=9 uniquement
	// IE <=9 remplace les balises <option> par leur contenu lorsqu'elles sont insérées en dehors de
	// l'élément sélectionné.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// Nous devons fermer ces balises pour supporter XHTML (trac-13200)
var wrapMap = {

	// Les analyseurs XHTML n'insèrent pas comme par magie des éléments dans le
	// de la même manière que les analyseurs de soupe de balises. Nous ne pouvons donc pas raccourcir
	// ceci en omettant <tbody> ou d'autres éléments requis.
	tête : [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr : [ 2, "<table><tbody>", "</tbody></table>" ],
	td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_par défaut : [ 0, "", "" ]
} ;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Prise en charge : IE <=9 uniquement
si ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


fonction getAll (contexte, balise) {

	// Prise en charge : IE <=9 - 11 uniquement
	// Utilisez typeof pour éviter l'invocation de méthode sans argument sur les objets hôtes (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "indéfini" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} autre {
		ret = [];
	}

	if ( tag === non défini || tag && nodeName (contexte, tag ) ) {
		return jQuery.merge( [contexte], ret);
	}

	retour à la retraite;
}


// Marquer les scripts comme ayant déjà été évalués
fonction setGlobalEval( elems, refElements ) {
	var je = 0,
		l = éléments.longueur;

	pour ( ; je < l; je++ ) {
		dataPriv.set(
			éléments[ je ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment (éléments, contexte, scripts, sélection, ignoré) {
	var elem, tmp, tag, wrap, attaché, j,
		fragment = contexte.createDocumentFragment(),
		nœuds = [],
		je = 0,
		l = éléments.longueur;

	pour ( ; je < l; je++ ) {
		elem = elems[ je ];

		si ( elem || elem === 0 ) {

			// Ajouter des nœuds directement
			if ( toType( elem ) === "objet" ) {

				// Prise en charge : Android <=4.0 uniquement, PhantomJS 1 uniquement
				// push.apply(_, arraylike) est lancé sur l'ancien WebKit
				jQuery.merge(noeuds, elem.nodeType ? [ elem ] : elem );

			// Convertit le non-html en un nœud de texte
			} sinon if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convertit le HTML en nœuds DOM
			} autre {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Désérialise une représentation standard
				tag = ( rtagName.exec( elem ) || [ "", "" ] )( 1 ].toLowerCase();
				wrap = wrapMap[balise] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descendre à travers les wrappers jusqu'au bon contenu
				j = envelopper[ 0 ];
				tandis que ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Prise en charge : Android <=4.0 uniquement, PhantomJS 1 uniquement
				// push.apply(_, arraylike) est lancé sur l'ancien WebKit
				jQuery.merge(noeuds, tmp.childNodes);

				// Mémoriser le conteneur de niveau supérieur
				tmp = fragment.firstChild;

				// Assurez-vous que les nœuds créés sont orphelins (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Supprime le wrapper du fragment
	fragment.textContent = "";

	je = 0 ;
	while ( ( elem = nœuds[ i++ ] ) ) {

		// Ignorer les éléments déjà dans la collection de contexte (trac-4087)
		if ( sélection && jQuery.inArray( elem, sélection ) > -1 ) {
			si (ignoré) {
				ignoré.push( elem );
			}
			continuer;
		}

		attaché = isAttached( elem );

		// Ajouter au fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Préserver l'historique d'évaluation du script
		si Joint ) {
			setGlobalEval(tmp);
		}

		// Capturer les exécutables
		si ( scripts ) {
			j = 0 ;
			tandis que ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	fragment de retour ;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

fonction returnTrue() {
	renvoie vrai ;
}

fonction returnFalse() {
	renvoie faux ;
}

fonction sur (elem, types, sélecteur, données, fn, un) {
	var origFn, tapez ;

	// Les types peuvent être une carte de types/gestionnaires
	if ( type de types === "objet" ) {

		// ( types-Objet, sélecteur, données )
		if ( type de sélecteur !== "string" ) {

			// ( types-Objet, données )
			données = données || sélecteur;
			sélecteur = non défini ;
		}
		pour ( tapez les types ) {
			on( elem, type, sélecteur, données, types[ type ], un );
		}
		renvoyer l'élément ;
	}

	si ( données == null && fn == null ) {

		// ( types, fn )
		fn = sélecteur ;
		data = sélecteur = non défini ;
	} sinon si ( fn == null ) {
		if ( type de sélecteur === "string" ) {

			// ( types, sélecteur, fn )
			fn = données ;
			données = non défini ;
		} autre {

			// ( types, données, fn )
			fn = données ;
			data = sélecteur ;
			sélecteur = non défini ;
		}
	}
	si ( fn === faux ) {
		fn = returnFalse ;
	} sinon si ( !fn ) {
		renvoyer l'élément ;
	}

	si ( un === 1 ) {
		origFn = fn;
		fn = fonction (événement) {

			// Peut utiliser un ensemble vide, puisque l'événement contient l'information
			jQuery().off(événement);
			return origFn.apply( this, arguments );
		} ;

		// Utilisez le même guid pour que l'appelant puisse supprimer en utilisant origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add (this, types, fn, données, sélecteur);
	} );
}

/*
 * Fonctions d'assistance pour la gestion des événements -- ne font pas partie de l'interface publique.
 * Accessoires à la bibliothèque addEvent de Dean Edwards pour de nombreuses idées.
 */
jQuery.event = {

	mondial: {},

	ajouter : fonction (élément, types, gestionnaire, données, sélecteur) {

		var handleObjIn, eventHandle, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.get( elem );

		// Attache uniquement les événements aux objets qui acceptent des données
		si ( !acceptData( elem ) ) {
			retour;
		}

		// L'appelant peut transmettre un objet de données personnalisées à la place du gestionnaire
		si ( gestionnaire.handler ) {
			handleObjIn = gestionnaire ;
			gestionnaire = handleObjIn.handler;
			sélecteur = handleObjIn.selector;
		}

		// Assurez-vous que les sélecteurs non valides lèvent des exceptions au moment de l'attachement
		// Évaluer par rapport à documentElement dans le cas où elem est un nœud non-élément (par exemple, document)
		if ( sélecteur ) {
			jQuery.find.matchesSelector( documentElement, sélecteur );
		}

		// Assurez-vous que le gestionnaire a un identifiant unique, utilisé pour le rechercher/supprimer ultérieurement
		si ( !handler.guid ) {
			gestionnaire.guid = jQuery.guid++;
		}

		// Initialise la structure d'événements et le gestionnaire principal de l'élément, s'il s'agit du premier
		if ( !( événements = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = fonction (e) {

				// Supprime le deuxième événement d'un jQuery.event.trigger() et
				// lorsqu'un événement est appelé après le déchargement d'une page
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : non défini ;
			} ;
		}

		// Gère plusieurs événements séparés par un espace
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ] ;
		t = types.longueur;
		tandis que ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [] ;
			type = origType = tmp[ 1 ];
			espaces de noms = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Il *doit* y avoir un type, sans attachement de gestionnaires d'espace de noms uniquement
			si ( !type ) {
				continuer;
			}

			// Si l'événement change de type, utilisez les gestionnaires d'événements spéciaux pour le type modifié
			spécial = jQuery.event.special[type] || {} ;

			// Si le sélecteur est défini, détermine le type d'API d'événement spécial, sinon le type est donné
			type = ( sélecteur ? special.delegateType : special.bindType ) || taper;

			// Mise à jour spéciale basée sur le type nouvellement réinitialisé
			spécial = jQuery.event.special[type] || {} ;

			// handleObj est transmis à tous les gestionnaires d'événements
			handleObj = jQuery.extend( {
				tapez: tapez,
				Type d'origine : Type d'origine,
				données : données,
				gestionnaire : gestionnaire,
				guid : handler.guid,
				sélecteur : sélecteur,
				needContext: sélecteur && jQuery.expr.match.needsContext.test( sélecteur),
				espace de noms : namespaces.join( "." )
			}, handleObjIn );

			// Initialise la file d'attente du gestionnaire d'événements si nous sommes les premiers
			if ( !( gestionnaires = événements[ type ] ) ) {
				gestionnaires = événements[ type ] = [];
				gestionnaires.delegateCount = 0 ;

				// N'utilise addEventListener que si le gestionnaire d'événements spéciaux renvoie false
				si ( !special.setup ||
					special.setup.call( elem, data, espaces de noms, eventHandle ) === false ) {

					si ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( spécial.ajouter ) {
				spécial.add.call( elem, handleObj );

				si ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Ajout à la liste des gestionnaires de l'élément, délégués devant
			if ( sélecteur ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} autre {
				handlers.push( handleObj );
			}

			// Gardez une trace des événements qui ont déjà été utilisés, pour l'optimisation des événements
			jQuery.event.global[ type] = true;
		}

	},

	// Détache un événement ou un ensemble d'événements d'un élément
	supprimer : fonction (elem, types, gestionnaire, sélecteur, mappedTypes) {

		var j, origCount, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( événements = elemData.events ) ) {
			retour;
		}

		// Une fois pour chaque type.namespace dans les types ; le type peut être omis
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ] ;
		t = types.longueur;
		tandis que ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [] ;
			type = origType = tmp[ 1 ];
			espaces de noms = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Dissocie tous les événements (sur cet espace de noms, s'il est fourni) pour l'élément
			si ( !type ) {
				pour (tapez les événements) {
					jQuery.event.remove( elem, type + types[ t ], gestionnaire, sélecteur, true );
				}
				continuer;
			}

			spécial = jQuery.event.special[type] || {} ;
			type = ( sélecteur ? special.delegateType : special.bindType ) || taper;
			gestionnaires = événements[ type ] || [] ;
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Supprime les événements correspondants
			origCount = j = handlers.length;
			tandis que ( j-- ) {
				handleObj = gestionnaires[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || sélecteur === handleObj.selector ||
						sélecteur === "**" && handleObj.selector ) ) {
					gestionnaires.splice( j, 1 );

					si ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( spécial.remove ) {
						spécial.remove.call( elem, handleObj );
					}
				}
			}

			// Supprime le gestionnaire d'événements générique si nous avons supprimé quelque chose et qu'il n'existe plus de gestionnaire
			// (évite le risque de récursion sans fin lors de la suppression des gestionnaires d'événements spéciaux)
			if ( origCount && !handlers.length ) {
				si ( !special.teardown ||
					special.teardown.call( elem, espaces de noms, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				supprimer des événements[ type ] ;
			}
		}

		// Supprime les données et l'expando si elles ne sont plus utilisées
		if ( jQuery.isEmptyObject( événements ) ) {
			dataPriv.remove( elem, "gérer les événements" );
		}
	},

	répartition : fonction (nativeEvent) {

		var i, j, ret, correspondant, handleObj, handlerQueue,
			args = nouveau tableau (arguments.longueur),

			// Créez un jQuery.Event inscriptible à partir de l'objet événement natif
			événement = jQuery.event.fix( nativeEvent ),

			gestionnaires = (
				dataPriv.get( this, "événements" ) || Objet.create( null )
			)[ type.événement ] || [],
			spécial = jQuery.event.special[ event.type ] || {} ;

		// Utilisez le jQuery.Event corrigé plutôt que l'événement natif (en lecture seule)
		args[ 0 ] = événement ;

		pour ( je = 1; je < arguments.longueur; je++ ) {
			args[ je ] = arguments[ je ];
		}

		event.delegateTarget = this ;

		// Appelez le hook preDispatch pour le type mappé et laissez-le se libérer si vous le souhaitez
		if ( special.preDispatch && special.preDispatch.call ( this, event ) === false ) {
			retour;
		}

		// Détermination des gestionnaires
		handlerQueue = jQuery.event.handlers.call (ceci, événement, gestionnaires);

		// Exécutez d'abord les délégués ; ils voudront peut-être arrêter la propagation sous nous
		je = 0 ;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0 ;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Si l'événement est doté d'un espace de noms, alors chaque gestionnaire n'est invoqué que s'il est
				// spécialement universel ou ses espaces de noms sont un surensemble de ceux de l'événement.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== non défini ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Appelez le hook postDispatch pour le type mappé
		si ( spécial.postDispatch ) {
			special.postDispatch.call( ceci, événement );
		}

		retourner event.result ;
	},

	gestionnaires : fonction (événement, gestionnaires) {
		var je, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			déléguéCount = gestionnaires.delegateCount,
			cur = event.target;

		// Rechercher des gestionnaires de délégués
		if ( déléguéCount &&

			// Prise en charge : IE <=9
			// Arbres d'instance SVG <use> trou noir (trac-13180)
			cur.nodeType &&

			// Prise en charge : Firefox <=42
			// Supprime les clics non conformes aux spécifications indiquant un bouton de pointeur non principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Prise en charge : IE 11 uniquement
			// ... mais pas les "clics" des touches fléchées des entrées radio, qui peuvent avoir un "bouton" -1 (gh-2343)
			!( event.type === "clic" && event.button >= 1 ) ) {

			pour ( ; cur !== this; cur = cur.parentNode || this ) {

				// Ne vérifie pas les non-éléments (trac-13208)
				// Ne traite pas les clics sur les éléments désactivés (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					pour ( je = 0; je < déléguéCount; i++ ) {
						handleObj = gestionnaires[ i ];

						// Ne pas entrer en conflit avec les propriétés Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === non défini ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					si ( matchedHandlers.length ) {
						handlerQueue.push( { elem : cur, handlers : matchedHandlers } );
					}
				}
			}
		}

		// Ajout des gestionnaires restants (directement liés)
		cur = ceci;
		if ( déléguéCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( déléguéCount ) } );
		}

		return handlerQueue ;
	},

	addProp : fonction (nom, crochet) {
		Object.defineProperty( jQuery.Event.prototype, nom, {
			énumérable : vrai,
			configurable : vrai,

			obtenir : isFunction(hook) ?
				fonction() {
					si ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				fonction() {
					si ( this.originalEvent ) {
						renvoie this.originalEvent[nom] ;
					}
				},

			ensemble : fonction (valeur) {
				Object.defineProperty( this, nom, {
					énumérable : vrai,
					configurable : vrai,
					inscriptible : vrai,
					valeur : valeur
				} );
			}
		} );
	},

	correctif : fonction (originalEvent) {
		return originalEvent[ jQuery.expando] ?
			événement original :
			nouveau jQuery.Event (originalEvent);
	},

	spécial: {
		charger: {

			// Empêche les événements image.load déclenchés de se propager vers window.load
			pas de bulle : vrai
		},
		Cliquez sur: {

			// Utiliser un événement natif pour garantir un état correct pour les entrées vérifiables
			configuration : fonction (données) {

				// Pour une compressibilité mutuelle avec _default, remplacez l'accès `this` par une var locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable par minification.
				var el = ceci || données;

				// Réclamez le premier gestionnaire
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "clic", ... )
					leverNative( el, "clic", true );
				}

				// Renvoie false pour permettre le traitement normal chez l'appelant
				renvoie faux ;
			},
			déclencheur : fonction (données) {

				// Pour une compressibilité mutuelle avec _default, remplacez l'accès `this` par une var locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable par minification.
				var el = ceci || données;

				// Forcer la configuration avant de déclencher un clic
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverNative( el, "clic" );
				}

				// Renvoie non faux pour permettre la propagation normale du chemin d'événement
				renvoie vrai ;
			},

			// Pour une cohérence entre navigateurs, supprimez le .click() natif sur les liens
			// Empêchez-le également si nous sommes actuellement dans une pile d'événements natifs exploitée
			_default : fonction (événement) {
				var target = event.target;
				retourner rcheckableType.test( target.type) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( cible, "clic" ) ||
					nodeName(cible, "a" );
			}
		},

		avant le déchargement : {
			postDispatch : fonction (événement) {

				// Prise en charge : Firefox 20+
				// Firefox n'alerte pas si le champ returnValue n'est pas défini.
				if ( event.result !== non défini && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
} ;

// Assurer la présence d'un écouteur d'événements qui gère les événements déclenchés manuellement
// événements synthétiques en interrompant la progression jusqu'à ce qu'ils soient réinvoqués en réponse à
// Événements *natifs* qu'il déclenche directement, garantissant que les changements d'état ont
// s'est déjà produit avant que d'autres écouteurs ne soient invoqués.
function leverNative( el, type, isSetup ) {

	// L'absence de `isSetup` indique un appel de déclencheur, qui doit forcer la configuration via jQuery.event.add
	si ( !isSetup ) {
		if ( dataPriv.get( el, type ) === non défini ) {
			jQuery.event.add(el, type, returnTrue);
		}
		retour;
	}

	// Enregistrez le contrôleur en tant que gestionnaire universel spécial pour tous les espaces de noms d'événements
	dataPriv.set( el, type, false );
	jQuery.event.add( el, tapez, {
		espace de noms : faux,
		gestionnaire : fonction (événement) {
			résultat var,
				enregistré = dataPriv.get( ceci, tapez );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interruption du traitement de l'événement synthétique externe .trigger()ed
				si ( !enregistré ) {

					// Stocke les arguments à utiliser lors de la gestion de l'événement natif interne
					// Il y aura toujours au moins un argument (un objet événement), donc ce tableau
					// ne sera pas confondu avec un objet de capture restant.
					enregistré = slice.call( arguments );
					dataPriv.set( ceci, tapez, enregistré);

					// Déclenche l'événement natif et capture son résultat
					ce type ]();
					result = dataPriv.get( ceci, tapez );
					dataPriv.set( this, type, false );

					if ( enregistré !== résultat ) {

						// Annule l'événement synthétique externe
						event.stopImmediatePropagation();
						event.preventDefault();

						renvoyer le résultat ;
					}

				// S'il s'agit d'un événement synthétique interne pour un événement avec un substitut bouillonnant
				// (focus ou flou), suppose que le substitut s'est déjà propagé depuis le déclenchement
				// l'événement natif et éviter que cela ne se reproduise ici.
				// Cela donne techniquement un mauvais ordre par rapport à `.trigger()` (dans lequel le
				// le substitut bouillonnant se propage *après* la base non bouillonnante), mais cela semble
				// moins mauvais que la duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// S'il s'agit d'un événement natif déclenché ci-dessus, tout est désormais en ordre
			// Déclenche un événement synthétique interne avec les arguments d'origine
			} sinon si (enregistré) {

				// ...et capture le résultat
				dataPriv.set( ceci, tapez, jQuery.event.trigger(
					enregistré[ 0 ],
					sauvegardé.slice( 1 ),
					ce
				) );

				// Abandonner la gestion de l'événement natif par tous les gestionnaires jQuery tout en autorisant
				// gestionnaires natifs sur le même élément à exécuter. Sur la cible, ceci est atteint
				// en arrêtant la propagation immédiate uniquement sur l'événement jQuery. Cependant,
				// l'événement natif est réencapsulé par un événement jQuery à chaque niveau du
				// propagation donc la seule façon de l'arrêter pour jQuery est de l'arrêter pour
				// tout le monde via `stopPropagation()` natif. Ce n'est pas un problème pour
				// focus/flou qui ne fait pas de bulles, mais il arrête également de cliquer sur les cases à cocher
				// et radios. Nous acceptons cette limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue ;
			}
		}
	} );
}

jQuery.removeEvent = fonction (elem, type, handle) {

	// Ce "if" est nécessaire pour les objets simples
	si ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
} ;

jQuery.Event = fonction (src, accessoires) {

	// Autoriser l'instanciation sans le mot-clé 'new'
	if ( !( cette instance de jQuery.Event ) ) {
		renvoie un nouveau jQuery.Event( src, props );
	}

	// Objet événement
	si ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Les événements qui bouillonnent dans le document peuvent avoir été marqués comme empêchés
		// par un gestionnaire plus bas dans l'arborescence ; refléter la valeur correcte.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === non défini &&

				// Prise en charge : Android <=2.3 uniquement
				src.returnValue === false ?
			returnTrue :
			returnFaux ;

		// Créer des propriétés cibles
		// Prise en charge : Safari <=6 - 7 uniquement
		// La cible ne doit pas être un nœud de texte (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget ;
		this. RelatedTarget = src. RelatedTarget ;

	// Type d'événement
	} autre {
		this.type = src;
	}

	// Place les propriétés explicitement fournies sur l'objet événement
	si ( accessoires ) {
		jQuery.extend( ceci, accessoires );
	}

	// Crée un horodatage si l'événement entrant n'en a pas
	this.timeStamp = src && src.timeStamp || Date.maintenant();

	// Marquez-le comme corrigé
	this[ jQuery.expando ] = true;
} ;

// jQuery.Event est basé sur les événements DOM3 comme spécifié par la liaison du langage ECMAScript
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructeur : jQuery.Event,
	isDefaultPrevented : returnFalse,
	isPropagationStopped : returnFalse,
	isImmediatePropagationStopped : returnFalse,
	isSimulated : faux,

	prévenirDefault : fonction() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue ;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation : fonction() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue ;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation : function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue ;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
} ;

// Inclut tous les accessoires d'événement courants, y compris les accessoires spécifiques à KeyEvent et MouseEvent
jQuery.each( {
	Clé alt : vrai,
	bulles : vrai,
	annulable : vrai,
	changéTouches : vrai,
	ctrlKey : vrai,
	détail : vrai,
	eventPhase : vrai,
	métaClé : vrai,
	pageX : vrai,
	pageY : vrai,
	ShiftKey : vrai,
	vue : vrai,
	"char": vrai,
	code : vrai,
	charCode : vrai,
	clé : vrai,
	code clé : vrai,
	bouton : vrai,
	boutons : vrai,
	clientX : vrai,
	clientY : vrai,
	offsetX : vrai,
	offsetY : vrai,
	ID du pointeur : vrai,
	pointerType : vrai,
	screenX : vrai,
	screenY : vrai,
	targetTouches : vrai,
	toElement : vrai,
	touches : vrai,
	lequel : vrai
}, jQuery.event.addProp );

jQuery.each( { focus : "focusin", flou : "focusout" }, function( type, déléguéType ) {

	fonction focusMapedHandler (nativeEvent) {
		si ( document.documentMode ) {

			// Prise en charge : IE 11+
			// Attache un seul gestionnaire focusin/focusout sur le document pendant que quelqu'un le souhaite
			// focus/flou. En effet, les premiers sont synchrones dans IE tandis que les seconds
			// sont asynchrones. Dans d'autres navigateurs, tous ces gestionnaires sont appelés de manière synchrone.

			// `handle` à partir de données privées envelopperait déjà l'événement, mais nous avons besoin
			// pour changer le `type` ici.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "flou";
			event.isSimulated = true ;

			// Tout d'abord, gérer focusin/focusout
			handle(nativeEvent);

			// ...puis, gérer le focus/flou
			//
			// focus/flou ne fait pas de bulles pendant que focusin/focusout le font ; simuler le premier en seulement
			// invoquant le gestionnaire au niveau inférieur.
			si ( event.target === event.currentTarget ) {

				// La partie configuration appelle `leverageNative`, qui, à son tour, appelle
				// `jQuery.event.add`, donc le handle d'événement aura déjà été défini
				// Par ce point.
				handle(événement);
			}
		} autre {

			// Pour les navigateurs non-IE, attachez un seul gestionnaire de capture au document
			// pendant que quelqu'un veut se concentrer/se concentrer.
			jQuery.event.simulate( déléguéType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[type] = {

		// Utiliser l'événement natif si possible pour que la séquence de flou/mise au point soit correcte
		configuration : fonction() {

			var attache ;

			// Réclamez le premier gestionnaire
			// dataPriv.set( ceci, "focus", ... )
			// dataPriv.set( this, "flou", ... )
			leverNative( this, tapez, true );

			si ( document.documentMode ) {

				// Prise en charge : IE 9 - 11+
				// Nous utilisons le même gestionnaire natif pour focusin & focus (et focusout & blur)
				// nous devons donc coordonner les parties de configuration et de démontage entre ces événements.
				// Utilisez `delegateType` comme clé car `type` est déjà utilisé par `leverageNative`.
				attaches = dataPriv.get( this, déléguéType );
				si ( !attaches ) {
					this.addEventListener( déléguéType, focusMappedHandler );
				}
				dataPriv.set (this, déléguéType, (attache || 0 ) + 1 );
			} autre {

				// Renvoie false pour permettre le traitement normal chez l'appelant
				renvoie faux ;
			}
		},
		déclencheur : fonction() {

			// Forcer la configuration avant le déclenchement
			leverNative( ceci, tapez );

			// Renvoie non faux pour permettre la propagation normale du chemin d'événement
			renvoie vrai ;
		},

		démontage : function() {
			var attache ;

			si ( document.documentMode ) {
				attaches = dataPriv.get (this, déléguéType) - 1 ;
				si ( !attaches ) {
					this.removeEventListener( déléguéType, focusMappedHandler );
					dataPriv.remove( this, déléguéType );
				} autre {
					dataPriv.set (this, déléguéType, attaches );
				}
			} autre {

				// Renvoie false pour indiquer que le démontage standard doit être appliqué
				renvoie faux ;
			}
		},

		// Supprime le focus natif ou le flou si nous sommes actuellement à l'intérieur
		// une pile d'événements natifs exploitée
		_default : fonction (événement) {
			return dataPriv.get( event.target, tapez );
		},

		Type de délégué : Type de délégué
	} ;

	// Prise en charge : Firefox <=44
	// Firefox n'a pas d'événements focus(in | out)
	// Ticket associé - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Prise en charge : Chrome <=48 - 49, Safari <=9.0 - 9.1
	// les événements focus(in | out) se déclenchent après les événements focus et flou,
	// qui constitue une violation des spécifications - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Ticket associé - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Prise en charge : IE 9 - 11+
	// Pour préserver l'ordre relatif des événements focusin/focus & focusout/blur garanti sur la branche 3.x,
	// attache un seul gestionnaire pour les deux événements dans IE.
	jQuery.event.special[ déléguéType ] = {
		configuration : fonction() {

			// Handle : nœuds normaux (via `this.ownerDocument`), fenêtre
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || ce.document || ce,
				dataHolder = document.documentMode ? ça : doc,
				attaches = dataPriv.get( dataHolder, déléguéType );

			// Prise en charge : IE 9 - 11+
			// Nous utilisons le même gestionnaire natif pour focusin & focus (et focusout & blur)
			// nous devons donc coordonner les parties de configuration et de démontage entre ces événements.
			// Utilisez `delegateType` comme clé car `type` est déjà utilisé par `leverageNative`.
			si ( !attaches ) {
				si ( document.documentMode ) {
					this.addEventListener( déléguéType, focusMappedHandler );
				} autre {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, déléguéType, (attache || 0 ) + 1 );
		},
		démontage : function() {
			var doc = this.ownerDocument || ce.document || ce,
				dataHolder = document.documentMode ? ça : doc,
				attaches = dataPriv.get( dataHolder, déléguéType ) - 1;

			si ( !attaches ) {
				si ( document.documentMode ) {
					this.removeEventListener( déléguéType, focusMappedHandler );
				} autre {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, déléguéType );
			} autre {
				dataPriv.set( dataHolder, déléguéType, attaches );
			}
		}
	} ;
} );

// Crée des événements mouseenter/leave à l'aide des contrôles mouseover/out et au moment de l'événement
// pour que la délégation d'événements fonctionne dans jQuery.
// Faites de même pour pointerenter/pointerleave et pointerover/pointerout
//
// Prise en charge : Safari 7 uniquement
// Safari envoie mouseenter trop souvent ; voir:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// pour la description du bug (il existait également dans les anciennes versions de Chrome).
jQuery.each( {
	mouseenter : "survol de la souris",
	mouseleave : "mouseout",
	pointerenter : "pointeur",
	pointerleave : "pointeur vers la sortie"
}, fonction (origine, correctif) {
	jQuery.event.special[ orig ] = {
		déléguéType : correctif,
		bindType : correctif,

		handle: fonction (événement) {
			var ret,
				cible = ceci,
				Related = événement. RelatedTarget,
				handleObj = event.handleObj;

			// Pour mouseenter/leave, appelez le gestionnaire si le lien est en dehors de la cible.
			// NB : Pas de RelatedTarget si la souris a quitté/entré la fenêtre du navigateur
			if ( !connexe || ( connexe !== cible && !jQuery.contains( cible, connexe ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( ceci, arguments );
				event.type = correctif ;
			}
			retour à la retraite;
		}
	} ;
} );

jQuery.fn.extend( {

	sur : fonction (types, sélecteur, données, fn) {
		return on( this, types, selector, data, fn );
	},
	un : fonction (types, sélecteur, données, fn) {
		return on( this, types, selector, data, fn, 1 );
	},
	off : fonction (types, sélecteur, fn) {
		var handleObj, tapez ;
		if ( types && types.preventDefault && types.handleObj ) {

			// (événement) envoyé jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.espace de noms :
					handleObj.origType,
				handleObj.sélecteur,
				handleObj.handler
			);
			rends ceci ;
		}
		if ( type de types === "objet" ) {

			// ( types-objet [, sélecteur] )
			pour ( tapez les types ) {
				this.off( type, sélecteur, types[ type ] );
			}
			rends ceci ;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = sélecteur ;
			sélecteur = non défini ;
		}
		si ( fn === faux ) {
			fn = returnFalse ;
		}
		renvoie this.each( function() {
			jQuery.event.remove(this, types, fn, sélecteur);
		} );
	}
} );


var

	// Prise en charge : IE <=10 - 11, Edge 12 - 13 uniquement
	// Dans IE/Edge, l'utilisation de groupes regex provoque ici de graves ralentissements.
	// Voir https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<lien/i,

	// vérifié="vérifié" ou vérifié
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Préfère un tbody à sa table parent pour contenir de nouvelles lignes
function manipulationTarget(elem, contenu) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )( 0 ] || élément;
	}

	renvoyer l'élément ;
}

// Remplace/restaure l'attribut type des éléments de script pour une manipulation sécurisée du DOM
fonction DisableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	renvoyer l'élément ;
}
fonction restaurerScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} autre {
		elem.removeAttribute( "type" );
	}

	renvoyer l'élément ;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, événements ;

	si ( dest.nodeType !== 1 ) {
		retour;
	}

	// 1. Copier les données privées : événements, gestionnaires, etc.
	si ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		événements = pdataOld.events;

		si ( événements ) {
			dataPriv.remove( dest, "gérer les événements" );

			pour (tapez les événements) {
				pour ( i = 0, l = événements[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copier les données utilisateur
	si ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Correction des bugs d'IE, voir les tests du support
fonction fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Ne parvient pas à conserver l'état coché d'une case à cocher ou d'un bouton radio cloné.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Impossible de ramener l'option sélectionnée à l'état sélectionné par défaut lors du clonage des options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue ;
	}
}

function domManip (collection, arguments, rappel, ignoré) {

	// Aplatit tous les tableaux imbriqués
	args = plat( args);

	var fragment, premier, scripts, hasScripts, nœud, doc,
		je = 0,
		l = collection.longueur,
		iNoClone = l - 1,
		valeur = arguments[ 0 ],
		valueIsFunction = isFunction( valeur );

	// Nous ne pouvons pas cloner les fragments Node contenant des éléments cochés, dans WebKit
	si ( valeurEstFonction ||
			( l > 1 && type de valeur === "chaîne" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( fonction( index ) {
			var self = collection.eq( index );
			si ( valeurEstFonction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignoré);
		} );
	}

	si ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignoré );
		premier = fragment.firstChild;

		si ( fragment.childNodes.length === 1 ) {
			fragment = premier ;
		}

		// Nécessite soit un nouveau contenu, soit un intérêt pour les éléments ignorés pour appeler le rappel
		if (premier || ignoré) {
			scripts = jQuery.map( getAll( fragment, "script" ), DisableScript );
			hasScripts = scripts.longueur;

			// Utiliser le fragment original pour le dernier élément
			// au lieu du premier car ça peut finir
			// étant vidé de manière incorrecte dans certaines situations (trac-8070).
			pour ( ; je < l; je++ ) {
				nœud = fragment ;

				si ( je !== iNoClone ) {
					noeud = jQuery.clone( noeud, vrai, vrai );

					// Conserver les références aux scripts clonés pour une restauration ultérieure
					si ( hasScripts ) {

						// Prise en charge : Android <=4.0 uniquement, PhantomJS 1 uniquement
						// push.apply(_, arraylike) est lancé sur l'ancien WebKit
						jQuery.merge(scripts, getAll(noeud, "script" ) );
					}
				}

				callback.call( collection[ i ], noeud, i );
			}

			si ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Réactiver les scripts
				jQuery.map( scripts, restaurerScript );

				// Évaluer les scripts exécutables lors de la première insertion de document
				pour ( je = 0; je < hasScripts; i++ ) {
					nœud = scripts[ je ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( noeud, "globalEval" ) &&
						jQuery.contains( doc, noeud ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase() !== "module" ) {

							// Dépendance AJAX facultative, mais n'exécutera pas de scripts s'il n'est pas présent
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl(noeud.src, {
									occasionnel : node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} autre {

							// Déballez une section CDATA contenant le contenu du script. Cela ne devrait pas être
							// nécessaire car dans les documents XML, ils ne sont déjà pas visibles lorsque
							// inspecte le contenu des éléments et dans les documents HTML, ils n'en ont pas
							// ce qui signifie, mais nous préservons cette logique pour une compatibilité ascendante.
							// Ceci sera complètement supprimé dans la version 4.0. Voir gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	collecte de retour ;
}

fonction supprimer (elem, sélecteur, keepData) {
	nœud var,
		nœuds = sélecteur ? jQuery.filter( sélecteur, elem ) : elem,
		je = 0 ;

	pour ( ; ( noeud = noeuds[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll(noeud) );
		}

		si (noeud.parentNode) {
			if ( keepData && isAttached(noeud ) ) {
				setGlobalEval( getAll( noeud, "script" ) );
			}
			node.parentNode.removeChild(noeud);
		}
	}

	renvoyer l'élément ;
}

jQuery.extend( {
	htmlPréfiltre : fonction (html) {
		renvoyer du HTML ;
	},

	clone : fonction (elem, dataAndEvents, deepDataAndEvents) {
		var je, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached(elem);

		// Résoudre les problèmes de clonage d'IE
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// Nous évitons jQuery#find ici pour des raisons de performances :
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll(elem);

			pour ( je = 0, l = srcElements.length; je < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copie les événements de l'original vers le clone
		si ( donnéesEtÉvénements ) {
			si ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( élément );
				destElements = destElements || getAll( clone );

				pour ( je = 0, l = srcElements.length; je < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} autre {
				cloneCopyEvent( elem, clone );
			}
		}

		// Préserver l'historique d'évaluation du script
		destElements = getAll( clone, "script" );
		si ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Renvoie l'ensemble cloné
		renvoyer le clone ;
	},

	cleanData : fonction (éléments) {
		données var, élément, type,
			spécial = jQuery.event.special,
			je = 0 ;

		pour ( ; ( elem = elems[ i ] ) !== non défini; i++ ) {
			si ( acceptData( elem ) ) {
				si ( ( data = elem[ dataPriv.expando ] ) ) {
					si ( data.events ) {
						pour (tapez data.events) {
							if ( spécial[ type ] ) {
								jQuery.event.remove( elem, tapez );

							// Ceci est un raccourci pour éviter la surcharge de jQuery.event.remove
							} autre {
								jQuery.removeEvent(elem, type, data.handle);
							}
						}
					}

					// Prise en charge : Chrome <=35 - 45+
					// Attribuez un élément non défini au lieu d'utiliser delete, voir Data#remove
					elem[ dataPriv.expando ] = non défini ;
				}
				si ( elem[ dataUser.expando ] ) {

					// Prise en charge : Chrome <=35 - 45+
					// Attribuez un élément non défini au lieu d'utiliser delete, voir Data#remove
					elem[ dataUser.expando ] = non défini ;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	détacher : fonction (sélecteur) {
		return remove( this, selector, true );
	},

	supprimer : fonction (sélecteur) {
		return delete( this, sélecteur );
	},

	texte : fonction (valeur) {
		retourner l'accès (this, fonction (valeur) {
			valeur de retour === non défini ?
				jQuery.text( ceci ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = valeur ;
					}
				} );
		}, null, valeur, arguments.length );
	},

	ajouter : fonction() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	préfixer : fonction() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	avant : fonction() {
		return domManip( this, arguments, function( elem ) {
			si ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	après : fonction() {
		return domManip( this, arguments, function( elem ) {
			si ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	vide : fonction() {
		var élém,
			je = 0 ;

		pour ( ; ( elem = this[ i ] ) != null; i++ ) {
			si ( elem.nodeType === 1 ) {

				// Prévenir les fuites de mémoire
				jQuery.cleanData( getAll( elem, false ) );

				// Supprime tous les nœuds restants
				elem.textContent = "";
			}
		}

		rends ceci ;
	},

	clone : fonction (dataAndEvents, deepDataAndEvents) {
		dataAndEvents = dataAndEvents == null ? faux : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? donnéesAndEvents : deepDataAndEvents;

		renvoie this.map( function() {
			return jQuery.clone (this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: fonction (valeur) {
		retourner l'accès (this, fonction (valeur) {
			var elem = ceci[ 0 ] || {},
				je = 0,
				l = cette.longueur;

			if ( valeur === non défini && elem.nodeType === 1 ) {
				retourner elem.innerHTML ;
			}

			// Voyons si nous pouvons prendre un raccourci et utiliser simplement innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( valeur ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				valeur = jQuery.htmlPrefilter( valeur );

				essayer {
					pour ( ; je < l; je++ ) {
						elem = ceci[ je ] || {} ;

						// Supprime les nœuds d'éléments et évite les fuites de mémoire
						si ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = valeur ;
						}
					}

					élément = 0 ;

				// Si l'utilisation de innerHTML génère une exception, utilisez la méthode de secours
				} attraper ( e ) {}
			}

			si ( élément ) {
				this.empty().append( valeur );
			}
		}, null, valeur, arguments.length );
	},

	remplacerAvec : fonction() {
		var ignoré = [];

		// Effectuer les modifications en remplaçant chaque élément de contexte non ignoré par le nouveau contenu
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignoré ) < 0 ) {
				jQuery.cleanData(getAll(this));
				si ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Forcer l'invocation du rappel
		}, ignoré );
	}
} );

jQuery.each( {
	appendTo : "ajouter",
	prependTo : "préfixer",
	insertBefore : "avant",
	insertAfter : "après",
	remplacerTout : "remplacerPar"
}, fonction (nom, original) {
	jQuery.fn[ nom ] = fonction ( sélecteur ) {
		var éléments,
			ret = [],
			insert = jQuery (sélecteur),
			dernier = insert.longueur - 1,
			je = 0 ;

		pour ( ; je <= dernier; i++ ) {
			elems = i === dernier ? ceci : this.clone( true );
			jQuery( insert[ i ] )(original ]( elems );

			// Prise en charge : Android <=4.0 uniquement, PhantomJS 1 uniquement
			// .get() car push.apply(_, arraylike) lance l'ancien WebKit
			push.apply( ret, elems.get() );
		}

		renvoie this.pushStack( ret );
	} ;
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = fonction (elem) {

		// Prise en charge : IE <=11 uniquement, Firefox <=30 (trac-15098, trac-14150)
		// IE lance des éléments créés dans des popups
		// FF lance quant à lui des éléments de cadre via "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		si ( !view || !view.opener ) {
			vue = fenêtre ;
		}

		return view.getComputedStyle( elem );
	} ;

var swap = fonction (elem, options, rappel) {
	var ret, nom,
		vieux = {} ;

	// Mémorise les anciennes valeurs et insère les nouvelles
	pour (nom dans les options) {
		vieux[nom] = elem.style[nom];
		elem.style[ nom ] = options[ nom ];
	}

	ret = callback.call( elem );

	// Rétablit les anciennes valeurs
	pour (nom dans les options) {
		elem.style[ nom ] = vieux[ nom ];
	}

	retour à la retraite;
} ;


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( fonction() {

	// L'exécution des tests pixelPosition et boxSizingReliable ne nécessite qu'une seule mise en page
	// donc ils sont exécutés en même temps pour sauvegarder le deuxième calcul.
	fonction calculateStyleTests() {

		// Ceci est un singleton, nous ne devons l'exécuter qu'une seule fois
		si ( !div ) {
			retour;
		}

		conteneur.style.cssText = "position:absolue;gauche:-11111px;largeur:60px;" +
			"marge supérieure : 1 px ; rembourrage : 0 ; bordure : 0 " ;
		div.style.cssText =
			"position: relative; affichage: bloc; dimensionnement de la boîte: bordure-boîte; débordement: défilement;" +
			"marge:auto;bordure:1px;padding:1px;" +
			"largeur : 60 % ; haut : 1 % » ;
		documentElement.appendChild(conteneur).appendChild(div);

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Prise en charge : Android 4.0 - 4.3 uniquement, Firefox <=3 - 44
		fiableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Prise en charge : Android 4.0 - 4.3 uniquement, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Certains styles reviennent avec des valeurs en pourcentage, même s'ils ne devraient pas
		div.style.right = "60%" ;
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Prise en charge : IE 9 - 11 uniquement
		// Détecter les erreurs de déclaration des dimensions de contenu pour les éléments box-sizing:border-box
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Prise en charge : IE 9 uniquement
		// Détecter le débordement : faire défiler les erreurs (gh-3699)
		// Prise en charge : Chrome <=64
		// Ne vous laissez pas tromper lorsque le zoom affecte offsetWidth (gh-4029)
		div.style.position = "absolu" ;
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( conteneur );

		// Annule le div pour qu'il ne soit pas stocké dans la mémoire et
		// ce sera aussi le signe que des vérifications déjà effectuées
		div = nul ;
	}

	fonction roundPixelMeasures (mesure) {
		return Math.round( parseFloat( mesure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		fiableTrDimensionsVal, fiableMarginLeftVal,
		conteneur = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Terminez plus tôt dans des environnements limités (sans navigateur)
	si ( !div.style ) {
		retour;
	}

	// Prise en charge : IE <=9 - 11 uniquement
	// Le style de l'élément cloné affecte l'élément source cloné (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box" ;

	jQuery.extend( prise en charge, {
		boxSizingReliable : fonction() {
			calculateStyleTests();
			retourner boxSizingReliableVal ;
		},
		pixelBoxStyles : fonction() {
			calculateStyleTests();
			renvoie pixelBoxStylesVal ;
		},
		pixelPosition : fonction() {
			calculateStyleTests();
			renvoie pixelPositionVal ;
		},
		fiableMarginLeft : fonction() {
			calculateStyleTests();
			retourner fiableMarginLeftVal ;
		},
		scrollboxSize : fonction() {
			calculateStyleTests();
			retourner scrollboxSizeVal ;
		},

		// Prise en charge : IE 9 - 11+, Edge 15 - 18+
		// IE/Edge rapporte incorrectement `getComputedStyle` des lignes du tableau avec largeur/hauteur
		// défini en CSS tandis que les propriétés `offset*` rapportent des valeurs correctes.
		// Le comportement dans IE 9 est plus subtil que dans les versions plus récentes et ça passe
		// quelques versions de ce test ; faites attention à ne pas le faire passer par là !
		//
		// Prise en charge : Firefox 70+
		// Seul Firefox inclut les largeurs de bordure
		// en dimensions calculées. (gh-4529)
		fiableTrDimensions : fonction() {
			var table, tr, trChild, trStyle ;
			si ( fiableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Prise en charge : Chrome 86+
				// La hauteur définie via cssText n'est pas appliquée.
				// La hauteur calculée revient alors à 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Prise en charge : Android 8 Chrome 86+
				// Dans notre iframe bodyBackground.html,
				// l'affichage de tous les éléments div est défini sur "inline",
				// ce qui pose problème uniquement sous Android 8 Chrome 86.
				// S'assurer que le div est `display: block`
				// contourne ce problème.
				trChild.style.display = "bloquer" ;

				documentElement
					.appendChild(tableau)
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				fiableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			retourner fiableTrDimensionsVal ;
		}
	} );
} )();


function curCSS (élément, nom, calculé) {
	var largeur, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( nom ),

		// Prise en charge : Firefox 51+
		// Récupération du style avant calcul d'une manière ou d'une autre
		// corrige un problème d'obtention de valeurs erronées
		// sur les éléments détachés
		style = elem.style;

	calculé = calculé || getStyles( élément );

	// getPropertyValue est nécessaire pour :
	// .css('filter') (IE 9 uniquement, trac-12537)
	// .css('--customProperty) (gh-3144)
	si ( calculé ) {

		// Prise en charge : IE <=9 - 11+
		// IE ne prend en charge que `"float"` dans `getPropertyValue` ; dans les styles calculés
		// il n'est disponible qu'en tant que `"cssFloat"`. Nous ne modifions plus les propriétés
		// envoyé à `.css()` en dehors de camelCasing, nous devons donc vérifier les deux.
		// Normalement, cela créerait une différence de comportement : si
		// `getPropertyValue` renvoie une chaîne vide, la valeur renvoyée
		// par `.css()` serait `indéfini`. C'est généralement le cas pour
		// éléments déconnectés. Cependant, dans IE, même les éléments déconnectés
		// sans style, renvoie `"none"` pour `getPropertyValue( "float" )`
		ret = calculé.getPropertyValue( nom ) || calculé[ nom ];

		si ( isCustomProp && ret ) {

			// Prise en charge : Firefox 105+, Chrome <=105+
			// La spécification nécessite de couper les espaces pour les propriétés personnalisées (gh-4926).
			// Firefox supprime uniquement les espaces de début. Chrome s'effondre
			// les espaces de début et de fin vers un seul espace.
			//
			// Revient à « undéfini » si une chaîne vide est renvoyée.
			// Ceci réduit une définition manquante avec une propriété définie
			// et défini sur une chaîne vide mais il n'y a pas d'API standard
			// nous permettant de les différencier sans pénalité de performances
			// et renvoyer « undéfini » s'aligne sur l'ancien jQuery.
			//
			// rtrimCSS traite U+000D CHARRIAGE RETURN et U+000C FORM FEED
			// comme espace alors que CSS ne le fait pas, mais ce n'est pas un problème
			// car le prétraitement CSS les remplace par U+000A LINE FEED
			// (qui *est* un espace CSS)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || indéfini;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, nom );
		}

		// Un hommage au "super hack de Dean Edwards"
		// Le navigateur Android renvoie un pourcentage pour certaines valeurs,
		// mais la largeur semble être de manière fiable en pixels.
		// Ceci est contraire au projet de spécification CSSOM :
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( nom ) ) {

			// Mémoriser les valeurs d'origine
			largeur = style.largeur;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Insère les nouvelles valeurs pour obtenir une valeur calculée
			style.minWidth = style.maxWidth = style.width = ret;
			ret = calculé.width;

			// Rétablit les valeurs modifiées
			style.width = largeur;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== non défini ?

		// Prise en charge : IE <=9 - 11 uniquement
		// IE renvoie la valeur zIndex sous forme d'entier.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Définissez le hook, nous vérifierons lors de la première exécution s'il est vraiment nécessaire.
	retour {
		obtenir : fonction() {
			si ( conditionFn() ) {

				// Hook n'est pas nécessaire (ou il n'est pas possible de l'utiliser à cause
				// à une dépendance manquante), supprimez-la.
				supprimez this.get ;
				retour;
			}

			// Crochet nécessaire ; redéfinissez-le pour que le test de support ne soit plus exécuté.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	} ;
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendeurProps = {} ;

// Renvoie une propriété préfixée par le fournisseur ou non définie
function supplierPropName( nom ) {

	// Vérifie les noms préfixés des fournisseurs
	var capName = nom[ 0 ].toUpperCase() + nom.slice( 1 ),
		je = cssPrefixes.length;

	alors que je-- ) {
		nom = cssPrefixes[ i ] + capName ;
		if ( nom dans emptyStyle ) {
			renvoyer le nom ;
		}
	}
}

// Renvoie une propriété jQuery.cssProps ou préfixée par le fournisseur potentiellement mappée
function finalPropName( nom ) {
	var final = jQuery.cssProps[ nom ] || vendeurProps[ nom ];

	si (final) {
		retour final ;
	}
	if ( nom dans emptyStyle ) {
		renvoyer le nom ;
	}
	return supplierProps[ nom ] = supplierPropName( nom ) || nom;
}


var

	// Échangeable si l'affichage est nul ou commence par un tableau
	// sauf "table", "table-cell" ou "table-caption"
	// Voir ici pour les valeurs d'affichage : https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(aucun|table(?!-c[ea]).+)/,
	cssShow = { position : "absolue", visibilité : "cachée", affichage : "bloc" },
	cssNormalTransform = {
		Espacement des lettres : "0",
		policePoids : "400"
	} ;

function setPositiveNumber( _elem, valeur, soustraire) {

	// Toutes les valeurs relatives (+/-) ont déjà été
	// normalisé à ce stade
	var matches = rcssNum.exec( valeur );
	matchs retour ?

		// Se prémunir contre les "soustractions" non définies, par exemple lorsqu'elles sont utilisées comme dans cssHooks
		Math.max( 0, matches[ 2 ] - ( soustraire || 0 ) ) + ( matches[ 3 ] || "px" ) :
		valeur;
}

fonction boxModelAdjustment (elem, dimension, box, isBorderBox, styles, calculatedVal) {
	var i = dimension === "largeur" ​​? dix,
		supplémentaire = 0,
		delta = 0,
		margeDelta = 0 ;

	// Un ajustement peut ne pas être nécessaire
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		renvoie 0 ;
	}

	pour ( ; je < 4; je += 2 ) {

		// Les deux modèles de boîte excluent la marge
		// Comptez le delta de marge séparément pour l'ajouter uniquement après l'ajustement de la gouttière de défilement.
		// Ceci est nécessaire pour que les marges négatives fonctionnent avec `outerHeight( true )` (gh-3982).
		if ( boîte === "marge" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// Si nous arrivons ici avec une content-box, nous recherchons "padding" ou "border" ou "margin"
		si ( !isBorderBox ) {

			// Ajouter un remplissage
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// Pour "border" ou "margin", ajoutez une bordure
			if ( box !== "rembourrage" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// Mais gardez toujours une trace sinon
			} autre {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// Si nous arrivons ici avec une bordure-box (contenu + remplissage + bordure), nous recherchons "contenu" ou
		// "remplissage" ou "marge"
		} autre {

			// Pour "contenu", soustrayez le remplissage
			if ( boîte === "contenu" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// Pour "content" ou "padding", soustrayez la bordure
			if ( boîte !== "marge" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Tenir compte de la gouttière de défilement positive de la zone de contenu lorsque cela est demandé en fournissant ComputatedVal
	if ( !isBorderBox && calculatedVal >= 0 ) {

		// offsetWidth/offsetHeight est une somme arrondie du contenu, du remplissage, de la gouttière de défilement et de la bordure
		// En supposant une gouttière de défilement entière, soustrayez le reste et arrondissez à l'inférieur
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			Val calculé -
			delta -
			supplémentaire -
			0,5

		// Si offsetWidth/offsetHeight est inconnu, alors nous ne pouvons pas déterminer la gouttière de défilement de la zone de contenu
		// Utiliser un zéro explicite pour éviter NaN (gh-3964)
		) ) || 0 ;
	}

	retourner delta + marginDelta ;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Commence avec le style calculé
	var styles = getStyles( elem ),

		// Pour éviter de forcer une redistribution, récupérez boxSizing uniquement si nous en avons besoin (gh-4322).
		// Fausse boîte de contenu jusqu'à ce que nous sachions qu'elle est nécessaire pour connaître la vraie valeur.
		boxSizingNeeded = !support.boxSizingReliable() || supplémentaire,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS (élément, dimension, styles),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Prise en charge : Firefox <=54
	// Renvoie une valeur non-pixel déroutante ou feint l'ignorance, le cas échéant.
	si ( rnumnonpx.test( val ) ) {
		si ( !extra ) {
			valeur de retour ;
		}
		val = "auto" ;
	}


	// Prise en charge : IE 9 - 11 uniquement
	// Utilisez offsetWidth/offsetHeight lorsque le dimensionnement de la boîte n'est pas fiable.
	// Dans ces cas, on peut faire confiance à la valeur calculée comme étant une zone de bordure.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Prise en charge : IE 10 - 11+, Edge 15 - 18+
		// IE/Edge rapporte incorrectement `getComputedStyle` des lignes du tableau avec largeur/hauteur
		// défini en CSS tandis que les propriétés `offset*` rapportent des valeurs correctes.
		// Fait intéressant, dans certains cas, IE 9 ne souffre pas de ce problème.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Revenir à offsetWidth/offsetHeight lorsque la valeur est "auto"
		// Cela se produit pour les éléments en ligne sans paramètre explicite (gh-3571)
		val === "auto" ||

		// Prise en charge : Android <=4.1 - 4.3 uniquement
		// Utilisez également offsetWidth/offsetHeight pour les dimensions en ligne mal déclarées (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Assurez-vous que l'élément est visible et connecté
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Le cas échéant, offsetWidth/offsetHeight se rapproche des dimensions de la zone de bordure.
		// Lorsqu'il n'est pas disponible (par exemple, SVG), supposez un dimensionnement de boîte peu fiable et interprétez le
		// valeur récupérée en tant que dimension de boîte de contenu.
		valueIsBorderBox = offsetProp dans elem ;
		si ( valueIsBorderBox ) {
			val = elem[offsetProp];
		}
	}

	// Normalise "" et auto
	val = parseFloat( val ) || 0 ;

	// Ajustement du modèle de boîte de l'élément
	retour ( val +
		boxModelAdjustment(
			élément,
			dimension,
			supplémentaire || ( isBorderBox ? "border" : "content" ),
			valeurEstBorderBox,
			modes,

			// Fournit la taille calculée actuelle pour demander le calcul de la gouttière de défilement (gh-3589)
			Val
		)
	) + "px" ;
}

jQuery.extend( {

	// Ajout de crochets de propriété de style pour remplacer la valeur par défaut
	// comportement d'obtention et de définition d'une propriété de style
	Crochets css : {
		opacité : {
			get : fonction (élément, calculé) {
				si ( calculé ) {

					// Nous devrions toujours récupérer un nombre grâce à l'opacité
					var ret = curCSS( elem, "opacité" );
					return ret === "" ? "1" : retrait;
				}
			}
		}
	},

	// N'ajoute pas automatiquement "px" à ces propriétés éventuellement sans unité
	Numéro css : {
		animationIterationCount : vrai,
		aspectRatio : vrai,
		borderImageSlice : vrai,
		columnCount : vrai,
		flexGrow : vrai,
		flexShrink : vrai,
		fontWeight : vrai,
		GridArea : vrai,
		grilleColonne : vrai,
		grilleColumnEnd : vrai,
		grilleColumnStart : vrai,
		GridRow : vrai,
		grilleRowEnd : vrai,
		grilleRowStart : vrai,
		lineHeight : vrai,
		opacité : vrai,
		ordre : vrai,
		orphelins : vrai,
		échelle : vrai,
		veuves : vrai,
		zIndex : vrai,
		zoom : vrai,

		// Lié au SVG
		fillOpacity : vrai,
		FloodOpacity : vrai,
		stopOpacité : vrai,
		StrokeMiterlimit : vrai,
		StrokeOpacity : vrai
	},

	// Ajoutez les propriétés dont vous souhaitez corriger les noms avant
	// définition ou obtention de la valeur
	cssProps : {},

	// Récupère et définit la propriété de style sur un nœud DOM
	style : fonction (élément, nom, valeur, extra) {

		// Ne définit pas de styles sur les nœuds de texte et de commentaires
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			retour;
		}

		// Assurez-vous que nous travaillons avec le bon nom
		var ret, type, crochets,
			origName = camelCase( nom ),
			isCustomProp = rcustomProp.test( nom ),
			style = elem.style;

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne le faisons pas
		// veut interroger la valeur s'il s'agit d'une propriété personnalisée CSS
		// puisqu'ils sont définis par l'utilisateur.
		si ( !isCustomProp ) {
			nom = finalPropName( origName );
		}

		// Obtient le hook pour la version avec préfixe, puis la version sans préfixe
		hooks = jQuery.cssHooks[nom] || jQuery.cssHooks[origName];

		// Vérifie si nous définissons une valeur
		si ( valeur !== non défini ) {
			type = type de valeur ;

			// Convertit "+=" ou "-=" en nombres relatifs (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				valeur = ajusterCSS (elem, nom, ret);

				// Corrige le bug trac-9237
				type = "numéro" ;
			}

			// Assurez-vous que les valeurs null et NaN ne sont pas définies (trac-7116)
			si ( valeur == null || valeur !== valeur ) {
				retour;
			}

			// Si un nombre a été transmis, ajoutez l'unité (sauf pour certaines propriétés CSS)
			// La vérification isCustomProp peut être supprimée dans jQuery 4.0 lorsque nous ajoutons uniquement automatiquement
			// "px" à quelques valeurs codées en dur.
			if ( tapez === "numéro" && !isCustomProp ) {
				valeur += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Les accessoires background-* affectent les valeurs du clone d'origine
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ nom ] = "hériter";
			}

			// Si un hook a été fourni, utilisez cette valeur, sinon définissez simplement la valeur spécifiée
			if ( !hooks || !( "set" dans les hooks ) ||
				( valeur = hooks.set( elem, valeur, extra ) ) !== non défini ) {

				si ( isCustomProp ) {
					style.setProperty( nom, valeur );
				} autre {
					style[ nom ] = valeur ;
				}
			}

		} autre {

			// Si un hook a été fourni, récupérez la valeur non calculée à partir de là
			if ( crochets && "obtenir" dans les crochets &&
				( ret = hooks.get( elem, false, extra ) ) !== non défini ) {

				retour à la retraite;
			}

			// Sinon, récupère simplement la valeur de l'objet style
			return style[ nom ];
		}
	},

	css : fonction (élément, nom, extra, styles) {
		var val, num, crochets,
			origName = camelCase( nom ),
			isCustomProp = rcustomProp.test( nom );

		// Assurez-vous que nous travaillons avec le bon nom. Nous ne le faisons pas
		// souhaite modifier la valeur s'il s'agit d'une propriété personnalisée CSS
		// puisqu'ils sont définis par l'utilisateur.
		si ( !isCustomProp ) {
			nom = finalPropName( origName );
		}

		// Essayez le nom avec préfixe suivi du nom sans préfixe
		hooks = jQuery.cssHooks[nom] || jQuery.cssHooks[origName];

		// Si un hook a été fourni, récupérez la valeur calculée à partir de là
		if ( crochets && "get" dans les crochets ) {
			val = hooks.get( elem, true, extra );
		}

		// Sinon, s'il existe un moyen d'obtenir la valeur calculée, utilisez-le
		si ( val === non défini ) {
			val = curCSS( élément, nom, styles );
		}

		// Convertit "normal" en valeur calculée
		if ( val === "normal" && nom dans cssNormalTransform ) {
			val = cssNormalTransform[ nom ];
		}

		// Rendre numérique si forcé ou si un qualificatif a été fourni et val semble numérique
		si ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		valeur de retour ;
	}
} );

jQuery.each( [ "hauteur", "largeur" ​​], fonction( _i, dimension ) {
	jQuery.cssHooks[dimension] = {
		get : fonction (élément, calculé, supplémentaire) {
			si ( calculé ) {

				// Certains éléments peuvent avoir des informations de dimension si nous les montrons de manière invisible
				// mais il doit avoir un style d'affichage actuel qui serait avantageux
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Prise en charge : Safari 8+
					// Les colonnes du tableau dans Safari ont un offsetWidth et un zéro non nuls
					// getBoundingClientRect().width sauf si l'affichage est modifié.
					// Prise en charge : IE <=11 uniquement
					// Exécution de getBoundingClientRect sur un nœud déconnecté
					// dans IE génère une erreur.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap(elem, cssShow, fonction() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set : fonction (élément, valeur, extra) {
			matchs var,
				styles = getStyles( élément ),

				// Ne lit styles.position que si le test a une chance d'échouer
				// pour éviter de forcer une redistribution.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolu",

				// Pour éviter de forcer une redistribution, récupérez boxSizing uniquement si nous en avons besoin (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || supplémentaire,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				soustraire = supplémentaire ?
					boxModelAdjustment(
						élément,
						dimension,
						supplémentaire,
						estBorderBox,
						modes
					) :
					0 ;

			// Tenir compte des dimensions peu fiables de la bordure en comparant le décalage* aux valeurs calculées et
			// simulant une boîte de contenu pour obtenir la bordure et le remplissage (gh-3699)
			si ( isBorderBox && scrollboxSizeBuggy ) {
				soustraire -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0,5
				);
			}

			// Convertir en pixels si un ajustement de valeur est nécessaire
			if ( soustraire && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = valeur;
				valeur = jQuery.css( elem, dimension );
			}

			return setPositiveNumber (elem, valeur, soustraire);
		}
	} ;
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	fonction (élément, calculé) {
		si ( calculé ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap(elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px" ;
		}
	}
);

// Ces hooks sont utilisés par animer pour développer les propriétés
jQuery.each( {
	marge: "",
	remplissage : "",
	largeur de la bordure"
}, fonction (préfixe, suffixe) {
	jQuery.cssHooks[ préfixe + suffixe ] = {
		développer : fonction (valeur) {
			var je = 0,
				développé = {},

				// Suppose un seul nombre sinon une chaîne
				parts = type de valeur === "string" ? valeur.split( " " ) : [ valeur ];

			pour ( ; je < 4; je++ ) {
				expansé[ préfixe + cssExpand[ i ] + suffixe ] =
					parties[ je ] || parties[ i - 2 ] || pièces[ 0 ];
			}

			retour élargi;
		}
	} ;

	if ( préfixe !== "marge" ) {
		jQuery.cssHooks[ préfixe + suffixe ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css : fonction (nom, valeur) {
		return access( this, function( elem, nom, valeur) {
			styles var, len,
				carte = {},
				je = 0 ;

			si ( Array.isArray( nom ) ) {
				styles = getStyles( élément );
				len = nom.longueur;

				pour ( ; je < len; i++ ) {
					map[ nom[ i ] ] = jQuery.css( elem, nom[ i ], false, styles );
				}

				carte de retour ;
			}

			valeur de retour !== non défini ?
				jQuery.style( élément, nom, valeur ) :
				jQuery.css( élément, nom );
		}, nom, valeur, arguments.length > 1 );
	}
} );


function Tween (elem, options, prop, end, easing) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween ;

Tween.prototype = {
	constructeur : Tween,
	init : fonction (élément, options, accessoire, fin, assouplissement, unité) {
		this.elem = elem;
		this.prop = prop;
		this.easing = assouplissement || jQuery.easing._default;
		ceci.options = options ;
		this.start = this.now = this.cur();
		this.end = fin;
		this.unit = unité || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur : fonction() {
		var hooks = Tween.propHooks[this.prop];

		retourner les crochets && hooks.get ?
			hooks.get(ceci):
			Tween.propHooks._default.get(this);
	},
	exécuter : fonction (pourcentage) {
		var soulagé,
			crochets = Tween.propHooks[ this.prop ];

		si ( this.options.duration ) {
			this.pos = assoupli = jQuery.easing[ this.easing ](
				pour cent, this.options.duration * pour cent, 0, 1, this.options.duration
			);
		} autre {
			this.pos = facilité = pourcentage ;
		}
		this.now = ( this.end - this.start ) * facilité + this.start;

		si ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		si ( crochets && crochets.set ) {
			hooks.set(ceci);
		} autre {
			Tween.propHooks._default.set(this);
		}
		rends ceci ;
	}
} ;

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_défaut: {
		obtenir : fonction (interpolation) {
			résultat var ;

			// Utiliser directement une propriété sur l'élément lorsqu'il ne s'agit pas d'un élément DOM,
			// ou lorsqu'il n'existe aucune propriété de style correspondante.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[tween.prop];
			}

			// Passer une chaîne vide comme 3ème paramètre à .css automatiquement
			// tente un parseFloat et revient à une chaîne si l'analyse échoue.
			// Les valeurs simples telles que "10px" sont analysées en Float ;
			// les valeurs complexes telles que "rotate(1rad)" sont renvoyées telles quelles.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Les chaînes vides, null, non définies et "auto" sont converties en 0.
			retourner !résultat || résultat === "auto" ? 0 : résultat ;
		},
		ensemble : fonction (interpolation) {

			// Utiliser le step hook pour la compatibilité arrière.
			// Utilisez cssHook s'il est là.
			// Utilisez .style si disponible et utilisez les propriétés simples si disponibles.
			si ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[tween.prop](tween);
			} sinon if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} autre {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
} ;

// Prise en charge : IE <=9 uniquement
// Approche basée sur la panique pour configurer les éléments sur des nœuds déconnectés
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	ensemble : fonction (interpolation) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
} ;

jQuery.easing = {
	linéaire : fonction( p ) {
		retourner p ;
	},
	swing: fonction (p) {
		return 0,5 - Math.cos( p * Math.PI ) / 2;
	},
	_par défaut : "swing"
} ;

jQuery.fx = Tween.prototype.init ;

// Rétrocompatibilité <1.8 point d'extension
jQuery.fx.step = {};




var
	fxNow, en cours,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

fonction planning() {
	si ( en cours ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame(programme);
		} autre {
			window.setTimeout( planning, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Les animations créées de manière synchrone s'exécuteront de manière synchrone
fonction createFxNow() {
	window.setTimeout( fonction() {
		fxNow = non défini ;
	} );
	retourner ( fxNow = Date.now() );
}

// Générer des paramètres pour créer une animation standard
fonction genFx (type, includeWidth) {
	var qui,
		je = 0,
		attrs = { hauteur : type } ;

	// Si nous incluons la largeur, la valeur du pas est 1 pour faire toutes les valeurs cssExpand,
	// sinon la valeur du pas est 2 pour sauter Gauche et Droite
	includeWidth = includeWidth ? dix;
	pour ( ; je < 4; je += 2 - includeWidth ) {
		which = cssExpand[ je ];
		attrs[ "marge" + which ] = attrs[ "padding" + which ] = type;
	}

	si (inclutLargeur) {
		attrs.opacity = attrs.width = type;
	}

	renvoyer les attributs ;
}

function createTween (valeur, accessoire, animation) {
	var entre,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		indice = 0,
		longueur = collection.longueur;
	pour ( ; index < longueur; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// Nous en avons fini avec cette propriété
			retour entre;
		}
	}
}

function defaultPrefilter (elem, props, opts) {
	var prop, valeur, bascule, crochets, oldfire, propTween, restaurerDisplay, affichage,
		isBox = "largeur" ​​dans les accessoires || "hauteur" dans les accessoires,
		anim = ceci,
		orig = {},
		style = elem.style,
		caché = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get(elem, "fxshow" );

	// Les animations de saut de file d'attente détournent les hooks fx
	si ( !opts.queue ) {
		crochets = jQuery._queueHooks( elem, "fx" );
		si ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			crochets.empty.fire = fonction() {
				si ( !hooks.unqueued ) {
					vieux feu ();
				}
			} ;
		}
		hooks.unqueued++;

		anim.always( function() {

			// Assurez-vous que le gestionnaire complet est appelé avant la fin
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuer y.queue( elem, "fx" ).length ) {
					crochets.empty.fire();
				}
			} );
		} );
	}

	// Détecter les animations afficher/masquer
	pour ( accessoire dans les accessoires ) {
		valeur = accessoires[ prop ];
		si ( rfxtypes.test( valeur ) ) {
			supprimer les accessoires[ prop ] ;
			basculer = basculer || valeur === "basculer" ;
			if ( valeur === ( caché ? "masquer" : "afficher" ) ) {

				// Faire semblant d'être caché s'il s'agit d'un "show" et
				// il y a encore des données d'un show/hide arrêté
				if ( value === "show" && dataShow && dataShow[ prop ] !== non défini ) {
					caché = vrai ;

				// Ignorer toutes les autres données non opérationnelles afficher/masquer
				} autre {
					continuer;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Renflouement s'il s'agit d'une non-opération comme .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		retour;
	}

	// Restreindre les styles "overflow" et "display" lors des animations de boîtes
	si ( isBox && elem.nodeType === 1 ) {

		// Prise en charge : IE <=9 - 11, Edge 12 - 15
		// Enregistrez les 3 attributs de débordement car IE ne déduit pas le raccourci
		// à partir de overflowX et overflowY de valeurs identiques et Edge reflète simplement
		// la valeur overflowX ici.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identifier un type d'affichage, en préférant les anciennes données afficher/masquer à la cascade CSS
		restaurerDisplay = dataShow && dataShow.display;
		si ( restaurerDisplay == null ) {
			restaurerDisplay = dataPriv.get( elem, "affichage" );
		}
		display = jQuery.css(elem, "affichage" );
		if ( display === "aucun" ) {
			si ( restaurerAffichage ) {
				display = restaurerDisplay ;
			} autre {

				// Récupère des valeurs non vides en forçant temporairement la visibilité
				showHide( [ elem ], true );
				restaurerDisplay = elem.style.display || restaurer l'affichage ;
				display = jQuery.css(elem, "affichage" );
				showHide( [ élément ] );
			}
		}

		// Animer les éléments en ligne en tant que bloc en ligne
		if ( display === "inline" || display === "inline-block" && restaurerDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "aucun" ) {

				// Restaure la valeur d'affichage d'origine à la fin des animations afficher/masquer pures
				si ( !propTween ) {
					anim.done( fonction() {
						style.display = restaurerDisplay ;
					} );
					si ( restaurerDisplay == null ) {
						display = style.display;
						restaurerDisplay = display === "aucun" ? "" : afficher;
					}
				}
				style.display = "bloc-en-ligne" ;
			}
		}
	}

	si ( opts.overflow ) {
		style.overflow = "caché" ;
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implémentation des animations afficher/masquer
	propTween = faux ;
	pour ( accessoire en orig ) {

		// Configuration générale d'affichage/masquage pour cette animation d'élément
		si ( !propTween ) {
			si ( dataShow ) {
				if ( "caché" dans dataShow ) {
					caché = dataShow.hidden ;
				}
			} autre {
				dataShow = dataPriv.access( elem, "fxshow", { display: restaurerDisplay } );
			}

			// Stocke caché/visible pour la bascule afin que `.stop().toggle()` "inverse"
			si ( bascule ) {
				dataShow.hidden = !hidden;
			}

			// Afficher les éléments avant de les animer
			si (caché) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( fonction() {

				/* eslint-active no-loop-func */

				// La dernière étape d'une animation "masquer" consiste à masquer l'élément
				si ( !caché ) {
					showHide( [ élément ] );
				}
				dataPriv.remove( elem, "fxshow" );
				pour ( accessoire en orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Configuration par propriété
		propTween = createTween( caché ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop dans dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			si (caché) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( accessoires, spécialEasing ) {
	var index, nom, assouplissement, valeur, hooks ;

	// camelCase, spécialEasing et extension du pass cssHook
	pour (index dans les accessoires) {
		nom = camelCase( index );
		assouplissement = spécialEasing[ nom ];
		valeur = accessoires[ index ];
		si ( Array.isArray( valeur ) ) {
			assouplissement = valeur[ 1 ];
			valeur = accessoires[ index ] = valeur[ 0 ];
		}

		si ( index !== nom ) {
			accessoires[nom] = valeur ;
			supprimer les accessoires[ index ] ;
		}

		hooks = jQuery.cssHooks[nom];
		if ( crochets && "développer" dans les crochets ) {
			valeur = hooks.expand( valeur );
			supprimer les accessoires[nom] ;

			// Pas tout à fait $.extend, cela n'écrasera pas les clés existantes.
			// Réutilisation de 'index' car nous avons le bon "nom"
			pour (index en valeur) {
				if ( !( index dans les accessoires ) ) {
					accessoires[index] = valeur[index];
					specialEasing[ index ] = assouplissement ;
				}
			}
		} autre {
			specialEasing[ nom ] = assouplissement ;
		}
	}
}

function Animation (élément, propriétés, options) {
	résultat var,
		arrêté,
		indice = 0,
		longueur = Animation.prefilters.length,
		différé = jQuery.Deferred().always( function() {

			// Ne correspond pas aux éléments dans le sélecteur :animated
			supprimer tick.elem ;
		} ),
		tick = fonction() {
			si ( arrêté ) {
				renvoie faux ;
			}
			var heure actuelle = fxNow || createFxNow(),
				restant = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Prise en charge : Android 2.3 uniquement
				// Un bug de crash archaïque ne nous permettra pas d'utiliser `1 - ( 0.5 || 0 )` (trac-12497)
				temp = restant / animation.duration || 0,
				pourcentage = 1 - température,
				indice = 0,
				longueur = animation.tweens.longueur ;

			pour ( ; index < longueur; index++ ) {
				animation.tweens[ index ].run( pour cent );
			}

			deferred.notifyWith( elem, [ animation, pourcentage, restant ] );

			// S'il y a plus à faire, cédez
			si (pourcentage < 1 && longueur) {
				retour restant ;
			}

			// S'il s'agissait d'une animation vide, synthétisez une notification de progression finale
			si ( !longueur ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Résoudre l'animation et rapporter sa conclusion
			deferred.resolveWith( elem, [ animation ] );
			renvoie faux ;
		},
		animation = différé.promise( {
			élém : élém,
			accessoires : jQuery.extend( {}, propriétés),
			opte : jQuery.extend( true, {
				spécialEasing : {},
				assouplissement : jQuery.easing._default
			}, options ),
			originalProperties : propriétés,
			optionsoriginales : options,
			heure de début : fxNow || createFxNow(),
			durée : options.durée,
			préadolescents : [],
			createTween : fonction (prop, fin) {
				var tween = jQuery.Tween( elem, animation.opts, prop, fin,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( interpolation );
				retour entre;
			},
			arrêter : fonction (gotoEnd) {
				indice var = 0,

					// Si on va jusqu'au bout, on veut parcourir tous les préadolescents
					// sinon on saute cette partie
					longueur = aller àFin ? animation.tweens.length : 0;
				si ( arrêté ) {
					rends ceci ;
				}
				arrêté = vrai ;
				pour ( ; index < longueur; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Résoudre le moment où nous avons joué la dernière image ; sinon, rejette
				si ( aller àFin ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} autre {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				rends ceci ;
			}
		} ),
		accessoires = animation.props;

	propFilter( props, animation.opts.specialEasing );

	pour ( ; index < longueur; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		si (résultat) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( résultat );
			}
			renvoyer le résultat ;
		}
	}

	jQuery.map(accessoires, createTween, animation);

	si ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call(elem, animation);
	}

	// Joindre les rappels des options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail(animation.opts.fail)
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( cochez, {
			élém : élém,
			anim : animation,
			file d'attente : animation.opts.queue
		} )
	);

	animation de retour ;
}

jQuery.Animation = jQuery.extend(Animation, {

	préadolescents : {
		"*": [ fonction( accessoire, valeur ) {
			var tween = this.createTween( prop, valeur );
			ajusterCSS( tween.elem, prop, rcssNum.exec( valeur ), tween );
			retour entre;
		} ]
	},

	tweener : fonction (accessoires, rappel) {
		si ( isFunction( accessoires ) ) {
			rappel = accessoires ;
			accessoires = [ "*" ];
		} autre {
			props = props.match( rnothtmlwhite );
		}

		var accessoire,
			indice = 0,
			longueur = props.longueur;

		pour ( ; index < longueur; index++ ) {
			prop = props[index];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [] ;
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	préfiltres : [ defaultPrefilter ],

	préfiltre : fonction (rappel, pré-ajout) {
		si (préajouter) {
			Animation.prefilters.unshift( rappel );
		} autre {
			Animation.prefilters.push( rappel );
		}
	}
} );

jQuery.speed = fonction (vitesse, assouplissement, fn) {
	var opt = vitesse && type de vitesse === "objet" ? jQuery.extend( {}, vitesse ) : {
		complet : fn || !fn && assouplissement ||
			isFunction (vitesse) && vitesse,
		durée : vitesse,
		assouplissement : fn && assouplissement || assouplissement && !isFunction( assouplissement ) && assouplissement
	} ;

	// Passe à l'état final si les effets sont désactivés
	si ( jQuery.fx.off ) {
		opt.duration = 0 ;

	} autre {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration dans jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration];

			} autre {
				opt.duration = jQuery.fx.speeds._default ;
			}
		}
	}

	// Normaliser opt.queue - true/undefined/null -> "fx"
	si ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx" ;
	}

	// File d'attente
	opt.old = opt.complete;

	opt.complete = fonction() {
		si ( isFunction ( opt.old ) ) {
			opt.old.call( ceci );
		}

		if ( opt.queue ) {
			jQuery.dequeue( ceci, opt.queue );
		}
	} ;

	option de retour ;
} ;

jQuery.fn.extend( {
	fadeTo : fonction (vitesse, to, assouplissement, rappel) {

		// Afficher tous les éléments masqués après avoir défini l'opacité sur 0
		renvoie this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animer à la valeur spécifiée
			.end().animate( { opacité : à }, vitesse, assouplissement, rappel );
	},
	animer : fonction (accessoire, vitesse, assouplissement, rappel) {
		var vide = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed (vitesse, assouplissement, rappel),
			doAnimation = fonction() {

				// Fonctionne sur une copie de prop afin que l'assouplissement par propriété ne soit pas perdu
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Animations vides ou finition résolue immédiatement
				if ( vide || dataPriv.get( this, "finish" ) ) {
					anim.stop( vrai );
				}
			} ;

		doAnimation.finish = doAnimation;

		retourner vide || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop : fonction (type, clearQueue, gotoEnd) {
		var stopQueue = fonction (crochets) {
			var stop = hooks.stop;
			supprimer hooks.stop ;
			stop( gotoEnd );
		} ;

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = tapez;
			type = non défini ;
		}
		si ( clearQueue ) {
			this.queue( tapez || "fx", [] );
		}

		renvoie this.each( function() {
			var dequeue = vrai,
				index = type != null && type + "queueHooks",
				minuteries = jQuery.timers,
				data = dataPriv.get( ceci );

			si ( indice ) {
				if ( données[ index ] && données[ index ].stop ) {
					stopQueue( données[ index ] );
				}
			} autre {
				pour (index dans les données) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( données[ index ] );
					}
				}
			}

			pour ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || minuteries[ index ].queue === type ) ) {

					minuteries[ index ].anim.stop( gotoEnd );
					retirer la file d'attente = faux ;
					minuteries.splice( index, 1 );
				}
			}

			// Démarre la suivante dans la file d'attente si la dernière étape n'a pas été forcée.
			// Les minuteries appelleront actuellement leurs rappels complets, ce qui
			// sera retiré de la file d'attente mais seulement s'il était gotoEnd.
			if ( retirer la file d'attente || !gotoEnd ) {
				jQuery.dequeue( ceci, tapez );
			}
		} );
	},
	terminer : fonction (type) {
		si ( tapez !== false ) {
			tapez = tapez || « effet » ;
		}
		renvoie this.each( function() {
			indice variable,
				data = dataPriv.get( ceci ),
				file d'attente = données[ type + "file d'attente" ],
				crochets = données[ type + "queueHooks" ],
				minuteries = jQuery.timers,
				longueur = file d'attente ? file d'attente.longueur : 0;

			// Activer l'indicateur de fin sur les données privées
			data.finish = vrai;

			// Vide d'abord la file d'attente
			jQuery.queue( ceci, tapez, [] );

			if ( crochets && crochets.stop ) {
				hooks.stop.call( ceci, vrai );
			}

			// Recherchez les animations actives et terminez-les
			pour ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					minuteries[ index ].anim.stop( true );
					minuteries.splice( index, 1 );
				}
			}

			// Recherchez les animations dans l'ancienne file d'attente et terminez-les
			pour ( index = 0 ; index < longueur ; index++ ) {
				if ( file d'attente[ index ] && file d'attente[ index ].finish ) {
					file d'attente[ index ].finish.call( this );
				}
			}

			// Désactive l'indicateur de fin
			supprimer data.finish ;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, nom) {
	var cssFn = jQuery.fn[ nom];
	jQuery.fn[ nom ] = fonction (vitesse, assouplissement, rappel) {
		vitesse de retour == null || type de vitesse === "booléen" ?
			cssFn.apply( ceci, arguments) :
			this.animate( genFx( name, true ), vitesse, assouplissement, rappel );
	} ;
} );

// Générer des raccourcis pour les animations personnalisées
jQuery.each( {
	slideDown : genFx( "afficher" ),
	slideUp : genFx( "masquer" ),
	slideToggle : genFx( "basculer" ),
	fadeIn : { opacité : "show" },
	fadeOut : { opacité : "masquer" },
	fadeToggle : { opacité : "toggle" }
}, fonction (nom, accessoires) {
	jQuery.fn[ nom ] = fonction (vitesse, assouplissement, rappel) {
		return this.animate( props, speed, easing, callback );
	} ;
} );

jQuery.timers = [];
jQuery.fx.tick = fonction() {
	minuterie var,
		je = 0,
		minuteries = jQuery.timers;

	fxNow = Date.now();

	pour ( ; je < timers.length; i++ ) {
		minuterie = minuteries[ je ];

		// Exécutez le minuteur et supprimez-le en toute sécurité une fois terminé (permettant une suppression externe)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	si ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = non défini ;
} ;

jQuery.fx.timer = fonction (minuterie) {
	jQuery.timers.push(minuterie);
	jQuery.fx.start();
} ;

jQuery.fx.intervalle = 13 ;
jQuery.fx.start = fonction() {
	si ( en cours ) {
		retour;
	}

	en cours = vrai ;
	calendrier();
} ;

jQuery.fx.stop = fonction() {
	en cours = nul ;
} ;

jQuery.fx.speeds = {
	lent : 600,
	rapide : 200,

	// Vitesse par défaut
	_par défaut : 400
} ;


// Basé sur le plugin de Clint Helfers, avec autorisation.
jQuery.fn.delay = fonction (heure, type) {
	temps = jQuery.fx ? jQuery.fx.speeds[heure] || temps temps;
	tapez = tapez || « effet » ;

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout (suivant, heure);
		crochets.stop = fonction() {
			window.clearTimeout( délai d'attente );
		} ;
	} );
} ;


( fonction() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "case à cocher" ;

	// Prise en charge : Android <=4.3 uniquement
	// La valeur par défaut d'une case à cocher doit être "on"
	support.checkOn = input.value !== "";

	// Prise en charge : IE <=11 uniquement
	// Doit accéder à selectedIndex pour sélectionner les options par défaut
	support.optSelected = opt.selected;

	// Prise en charge : IE <=11 uniquement
	// Une entrée perd sa valeur après être devenue une radio
	input = document.createElement( "input" );
	entrée.value = "t" ;
	input.type = "radio" ;
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr : fonction (nom, valeur) {
		return access (this, jQuery.attr, nom, valeur, arguments.length > 1 );
	},

	RemoveAttr : fonction (nom) {
		renvoie this.each( function() {
			jQuery.removeAttr( ceci, nom );
		} );
	}
} );

jQuery.extend( {
	attr : fonction (élément, nom, valeur) {
		var ret, crochets,
			nType = elem.nodeType ;

		// Ne pas obtenir/définir d'attributs sur les nœuds de texte, de commentaire et d'attribut
		si ( nType === 3 || nType === 8 || nType === 2 ) {
			retour;
		}

		// Retour à prop lorsque les attributs ne sont pas pris en charge
		if ( typeof elem.getAttribute === "indéfini" ) {
			return jQuery.prop(elem, nom, valeur);
		}

		// Les hooks d'attribut sont déterminés par la version minuscule
		// Récupère le hook nécessaire s'il est défini
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ nom.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( nom ) ? boolHook : non défini );
		}

		si ( valeur !== non défini ) {
			si ( valeur === null ) {
				jQuery.removeAttr( elem, nom );
				retour;
			}

			if ( crochets && "set" dans les crochets &&
				( ret = hooks.set( elem, valeur, nom ) ) !== non défini ) {
				retour à la retraite;
			}

			elem.setAttribute( nom, valeur + "" );
			valeur de retour ;
		}

		if ( hooks && "get" dans hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			retour à la retraite;
		}

		ret = jQuery.find.attr( elem, nom );

		// Les attributs inexistants renvoient null, nous normalisons à indéfini
		return ret == null ? non défini : ret;
	},

	AttrHooks : {
		taper: {
			ensemble : fonction (élément, valeur) {
				if ( !support.radioValue && valeur === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", valeur );
					si ( val ) {
						elem.value = val;
					}
					valeur de retour ;
				}
			}
		}
	},

	RemoveAttr : fonction (élément, valeur) {
		nom de la variable,
			je = 0,

			// Les noms d'attributs peuvent contenir des espaces non HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( nom = attrNames[ i++ ] ) ) {
				elem.removeAttribute( nom );
			}
		}
	}
} );

// Hooks pour les attributs booléens
boolHook = {
	set : fonction (élément, valeur, nom) {
		si ( valeur === faux ) {

			// Supprime les attributs booléens lorsqu'ils sont définis sur false
			jQuery.removeAttr( elem, nom );
		} autre {
			elem.setAttribute( nom, nom );
		}
		renvoyer le nom ;
	}
} ;

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), fonction( _i, nom ) {
	var getter = attrHandle[ nom ] || jQuery.find.attr;

	attrHandle[nom] = fonction(elem, nom, isXML) {
		var ret, poignée,
			lowercaseName = nom.toLowerCase();

		si ( !isXML ) {

			// Évitez une boucle infinie en supprimant temporairement cette fonction du getter
			handle = attrHandle[nomminuscule];
			attrHandle[nomminuscule] = ret;
			ret = getter( elem, nom, isXML ) != null ?
				nomminuscule :
				nul;
			attrHandle[ lowercaseName ] = handle;
		}
		retour à la retraite;
	} ;
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|zone)$/i;

jQuery.fn.extend( {
	prop : fonction (nom, valeur) {
		return access (this, jQuery.prop, nom, valeur, arguments.length > 1 );
	},

	RemoveProp : fonction (nom) {
		renvoie this.each( function() {
			supprimer ceci[ jQuery.propFix[ nom ] || nom ];
		} );
	}
} );

jQuery.extend( {
	prop : fonction (élément, nom, valeur) {
		var ret, crochets,
			nType = elem.nodeType ;

		// Ne pas obtenir/définir les propriétés sur les nœuds de texte, de commentaire et d'attribut
		si ( nType === 3 || nType === 8 || nType === 2 ) {
			retour;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Corrige le nom et attache les hooks
			nom = jQuery.propFix[ nom ] || nom;
			hooks = jQuery.propHooks[nom];
		}

		si ( valeur !== non défini ) {
			if ( crochets && "set" dans les crochets &&
				( ret = hooks.set( elem, valeur, nom ) ) !== non défini ) {
				retour à la retraite;
			}

			return ( elem[ nom ] = valeur );
		}

		if ( hooks && "get" dans hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			retour à la retraite;
		}

		return elem[ nom ];
	},

	propHooks : {
		ongletIndex : {
			obtenir : fonction (élément) {

				// Prise en charge : IE <=9 - 11 uniquement
				// elem.tabIndex ne renvoie pas toujours le
				// valeur correcte lorsqu'elle n'a pas été explicitement définie
				// Utiliser la récupération d'attribut appropriée (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				si ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				si (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					renvoie 0 ;
				}

				renvoie -1 ;
			}
		}
	},

	correctif : {
		"pour": "htmlPour",
		"class": "nomclasse"
	}
} );

// Prise en charge : IE <=11 uniquement
// Accès à la propriété selectedIndex
// force le navigateur à respecter le paramètre sélectionné
// sur l'option
// Le getter garantit qu'une option par défaut est sélectionnée
// quand je suis dans un groupe opt
// la règle eslint "no-unused-expressions" est désactivée pour ce code
// puisqu'il considère de telles accessions noop
si ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		obtenir : fonction (élément) {

			/* eslint aucune expression-inutilisée : "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			renvoie null ;
		},
		ensemble : fonction (élément) {

			/* eslint aucune expression-inutilisée : "off" */

			var parent = elem.parentNode;
			si ( parent ) {
				parent.selectedIndex;

				si ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	} ;
}

jQuery.each( [
	"ongletIndex",
	"lecture seulement",
	"longueur maximale",
	"Espacement des cellules",
	"CellPadding",
	"ligneSpan",
	"colSpan",
	"useMap",
	"bordure de cadre",
	"contenuModifiable"
], fonction() {
	jQuery.propFix[ this.toLowerCase() ] = ceci;
} );




	// Supprime et réduit les espaces selon les spécifications HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	fonction stripAndCollapse (valeur) {
		var tokens = value.match( rnothtmlwhite ) || [] ;
		return tokens.join( " " );
	}


fonction getClass(elem) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "" ;
}

fonction classesToArray (valeur) {
	si ( Array.isArray( valeur ) ) {
		valeur de retour ;
	}
	if ( type de valeur === "string" ) {
		return value.match( rnothtmlwhite ) || [] ;
	}
	retour [];
}

jQuery.fn.extend( {
	addClass : fonction (valeur) {
		var classNames, cur, curValue, className, i, finalValue ;

		si ( estFonction( valeur ) ) {
			renvoyer this.each( fonction( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( valeur );

		si ( classNames.length ) {
			renvoie this.each( function() {
				curValue = getClass( ceci );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				si ( cur ) {
					pour ( je = 0; je < classNames.length; i++ ) {
						nom de classe = noms de classe[ i ];
						if ( cur.indexOf( " " + nom de classe + " " ) < 0 ) {
							cur += Nom de classe + " ";
						}
					}

					// N'attribuez que s'il est différent pour éviter un rendu inutile.
					finalValue = stripAndCollapse( cur );
					si ( valeur curative !== valeur finale ) {
						this.setAttribute( "classe", finalValue );
					}
				}
			} );
		}

		rends ceci ;
	},

	RemoveClass : fonction (valeur) {
		var classNames, cur, curValue, className, i, finalValue ;

		si ( estFonction( valeur ) ) {
			renvoyer this.each( fonction( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		si ( !arguments.longueur ) {
			return this.attr( "classe", "" );
		}

		classNames = classesToArray( valeur );

		si ( classNames.length ) {
			renvoie this.each( function() {
				curValue = getClass( ceci );

				// Cette expression est ici pour une meilleure compressibilité (voir addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				si ( cur ) {
					pour ( je = 0; je < classNames.length; i++ ) {
						nom de classe = noms de classe[ i ];

						// Supprime *toutes* les instances
						while ( cur.indexOf( " " + nom de classe + " " ) > -1 ) {
							cur = cur.replace( " " + nom de classe + " ", " " );
						}
					}

					// N'attribuez que s'il est différent pour éviter un rendu inutile.
					finalValue = stripAndCollapse( cur );
					si ( valeur curative !== valeur finale ) {
						this.setAttribute( "classe", finalValue );
					}
				}
			} );
		}

		rends ceci ;
	},

	toggleClass : fonction (valeur, stateVal) {
		var classNames, className, i, self,
			type = type de valeur,
			isValidValue = type === "chaîne" || Array.isArray( valeur );

		si ( estFonction( valeur ) ) {
			renvoie this.each( function( i ) {
				jQuery(ce).toggleClass(
					value.call( ceci, je, getClass( this ), stateVal ),
					étatVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			retourner stateVal ? this.addClass( valeur ) : this.removeClass( valeur );
		}

		classNames = classesToArray( valeur );

		renvoie this.each( function() {
			si ( estValidValue ) {

				// Basculer les noms de classes individuelles
				soi = jQuery( ceci );

				pour ( je = 0; je < classNames.length; i++ ) {
					nom de classe = noms de classe[ i ];

					// Vérifiez chaque nom de classe donné, liste séparée par des espaces
					if ( self.hasClass( nom de classe ) ) {
						self.removeClass( nomClasse );
					} autre {
						self.addClass( nomClasse );
					}
				}

			// Bascule le nom de la classe entière
			} else if ( valeur === non défini || type === "booléen" ) {
				nom de classe = getClass( this );
				si ( Nom de classe ) {

					// Stocke le nom de classe si défini
					dataPriv.set( this, "__className__", className );
				}

				// Si l'élément a un nom de classe ou si on nous passe `false`,
				// puis supprimez tout le nom de classe (s'il y en avait un, ce qui précède l'a enregistré).
				// Sinon, ramène ce qui a été précédemment enregistré (le cas échéant),
				// retour à la chaîne vide si rien n'a été stocké.
				si ( this.setAttribute ) {
					this.setAttribute( "classe",
						nom de classe || valeur === faux ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass : fonction (sélecteur) {
		var nom de classe, élément,
			je = 0 ;

		className = " " + sélecteur + " " ;
		while ( ( elem = this[ i++ ] ) ) {
			si ( elem.nodeType === 1 &&
				( " " + stripAndCollapse ( getClass ( elem ) ) + " " ).indexOf ( className ) > -1 ) {
				renvoie vrai ;
			}
		}

		renvoie faux ;
	}
} );




var rretour = /\r/g;

jQuery.fn.extend( {
	val: fonction (valeur) {
		var crochets, ret, valueIsFunction,
			elem = ceci[ 0 ];

		si ( !arguments.longueur ) {
			si ( élément ) {
				hooks = jQuery.valHooks[elem.type] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				si ( crochets &&
					"obtenir" dans les crochets &&
					( ret = hooks.get( elem, "value" ) ) !== non défini
				) {
					retour à la retraite;
				}

				ret = elem.valeur ;

				// Gère les cas de chaînes les plus courants
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Gère les cas où la valeur est null/undef ou numérique
				return ret == null ? "" : ret;
			}

			retour;
		}

		valueIsFunction = isFunction( valeur );

		renvoie this.each( function( i ) {
			varval;

			si ( this.nodeType !== 1 ) {
				retour;
			}

			si ( valeurEstFonction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} autre {
				val = valeur ;
			}

			// Traitez null/indéfini comme "" ; convertir des nombres en chaîne
			si ( val == nul ) {
				val = "";

			} else if ( typeof val === "numéro" ) {
				val += "";

			} sinon si ( Array.isArray( val ) ) {
				val = jQuery.map( val, fonction( valeur ) {
					valeur de retour == null ? "" : valeur + "";
				} );
			}

			hooks = jQuery.valHooks[this.type] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// Si set renvoie undefined, revenez au paramètre normal
			if ( !hooks || !( "set" dans hooks ) || hooks.set( this, val, "value" ) === non défini ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks : {
		option: {
			obtenir : fonction (élément) {

				var val = jQuery.find.attr( elem, "valeur" );
				return val != null ?
					val :

					// Prise en charge : IE <=10 - 11 uniquement
					// option.text lève des exceptions (trac-14686, trac-14858)
					// Supprime et réduit les espaces
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		sélectionner: {
			obtenir : fonction (élément) {
				var valeur, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					valeurs = un ? nul : [],
					max = un ? index + 1 : options.longueur;

				si ( indice < 0 ) {
					je = maximum ;

				} autre {
					je = un ? indice : 0;
				}

				// Parcourez toutes les options sélectionnées
				pour ( ; je < max; i++ ) {
					option = options[ je ];

					// Prise en charge : IE <=9 uniquement
					// IE8-9 ne met pas à jour la sélection après la réinitialisation du formulaire (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Ne renvoie pas les options désactivées ou dans un groupe d'options désactivé
							!option.désactivé &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Récupère la valeur spécifique de l'option
						valeur = jQuery( option ).val();

						// Nous n'avons pas besoin d'un tableau pour une sélection
						Si un ) {
							valeur de retour ;
						}

						// Les sélections multiples renvoient un tableau
						valeurs.push( valeur );
					}
				}

				valeurs de retour ;
			},

			ensemble : fonction (élément, valeur) {
				var jeu d'options, option,
					options = elem.options,
					valeurs = jQuery.makeArray( valeur ),
					je = options.longueur;

				alors que je-- ) {
					option = options[ je ];

					/* eslint-disable no-cond-assign */

					si ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option), valeurs) > -1
					) {
						optionSet = vrai ;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force les navigateurs à se comporter de manière cohérente lorsqu'une valeur non correspondante est définie
				si ( !optionSet ) {
					elem.selectedIndex = -1 ;
				}
				valeurs de retour ;
			}
		}
	}
} );

// Radios et cases à cocher getter/setter
jQuery.each( [ "radio", "case à cocher" ], function() {
	jQuery.valHooks[ ceci] = {
		ensemble : fonction (élément, valeur) {
			si ( Array.isArray( valeur ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	} ;
	si ( !support.checkOn ) {
		jQuery.valHooks[this].get = function(elem) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		} ;
	}
} );




// Renvoie jQuery pour l'inclusion des attributs uniquement
var emplacement = fenêtre.emplacement;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Analyse XML multi-navigateurs
jQuery.parseXML = fonction (données) {
	var xml, parserErrorElem ;
	if ( !data || type de données !== "string" ) {
		renvoie null ;
	}

	// Prise en charge : IE 9 - 11 uniquement
	// IE lance parseFromString avec une entrée non valide.
	essayer {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} attraper ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	si ( !xml || parserErrorElem ) {
		jQuery.error( "XML non valide : " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				données
		) );
	}
	renvoyer XML ;
} ;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = fonction( e ) {
		e.stopPropagation();
	} ;

jQuery.extend( jQuery.event, {

	déclencheur : fonction (événement, données, elem, onlyHandlers) {

		var i, cur, tmp, bubbleType, ontype, handle, spécial, lastElement,
			eventPath = [ élément || document ],
			type = hasOwn.call(événement, "type" ) ? event.type : événement,
			espaces de noms = hasOwn.call( événement, "espace de noms" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Ne pas créer d'événements sur les nœuds de texte et de commentaires
		si ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			retour;
		}

		// focus/flou se transforme en focusin/out ; assurez-vous que nous ne les licencions pas maintenant
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			retour;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Déclencheur avec espace de noms ; créer une expression rationnelle pour correspondre au type d'événement dans handle()
			espaces de noms = type.split( "." );
			type = espaces de noms.shift();
			espaces de noms.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// L'appelant peut transmettre un objet jQuery.Event, un objet ou simplement une chaîne de type d'événement
		événement = événement[ jQuery.expando ] ?
			événement :
			new jQuery.Event( type, typeof event === "object" && event );

		// Masque de bits de déclenchement : & 1 pour les gestionnaires natifs ; & 2 pour jQuery (toujours vrai)
		event.isTrigger = onlyHandlers ? 2 : 3 ;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			nul;

		// Nettoie l'événement au cas où il serait réutilisé
		event.result = non défini ;
		si ( !event.target ) {
			event.target = elem;
		}

		// Clonez toutes les données entrantes et ajoutez l'événement au début, créant ainsi la liste d'arguments du gestionnaire
		données = données == null ?
			[ événement ] :
			jQuery.makeArray( données, [ événement ] );

		// Autoriser les événements spéciaux à sortir des limites
		spécial = jQuery.event.special[type] || {} ;
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			retour;
		}

		// Déterminer le chemin de propagation des événements à l'avance, conformément aux spécifications des événements du W3C (trac-9951)
		// Bulle vers le document, puis vers la fenêtre ; surveillez un propriétaire globalDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = spécial.delegateType || taper;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			pour ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// N'ajoute une fenêtre que si nous arrivons au document (par exemple, pas un objet simple ou un DOM détaché)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Gestionnaires d'incendie sur le chemin de l'événement
		je = 0 ;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				Type de bulle :
				spécial.bindType || taper;

			// Gestionnaire jQuery
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )( event.type ] &&
				dataPriv.get( cur, "handle" );
			si (poignée) {
				handle.apply( cur, données );
			}

			// Gestionnaire natif
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				si ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// Si personne n'a empêché l'action par défaut, faites-le maintenant
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			si ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( élément ) ) {

				// Appel d'une méthode DOM native sur la cible avec le même nom que l'événement.
				// Ne pas effectuer d'actions par défaut sur la fenêtre, c'est là que se trouvent les variables globales (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Ne pas relancer un événement onFOO quand on appelle sa méthode FOO()
					tmp = elem[ontype];

					si ( tmp ) {
						elem[ ontype ] = null;
					}

					// Empêche le redéclenchement du même événement, puisque nous l'avons déjà bulle ci-dessus
					jQuery.event.triggered = type ;

					si ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[type]();

					si ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = non défini ;

					si ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		retourner event.result ;
	},

	// S'appuie sur un événement donateur pour en simuler un autre
	// Utilisé uniquement pour les événements `focus(in | out)`
	simuler : fonction (type, élément, événement) {
		var e = jQuery.extend(
			nouveau jQuery.Event(),
			événement,
			{
				tapez: tapez,
				isSimulated : vrai
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	déclencheur : fonction (type, données) {
		renvoie this.each( function() {
			jQuery.event.trigger( type, données, this );
		} );
	},
	triggerHandler : fonction (type, données) {
		var elem = ceci[ 0 ];
		si ( élément ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rsupport = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams (préfixe, obj, traditionnel, add) {
	nom de la variable ;

	si ( Array.isArray( obj ) ) {

		// Sérialise l'élément du tableau.
		jQuery.each( obj, fonction( i, v ) {
			if ( traditionnel || rbracket.test( préfixe ) ) {

				// Traitez chaque élément du tableau comme un scalaire.
				ajouter( préfixe, v );

			} autre {

				// L'élément est non scalaire (tableau ou objet), encode son index numérique.
				buildParams(
					préfixe + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditionnel,
					ajouter
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Sérialise l'élément d'objet.
		pour (nom dans obj) {
			buildParams( préfixe + "[" + nom + "]", obj[ nom ], traditionnel, add );
		}

	} autre {

		// Sérialise l'élément scalaire.
		ajouter( préfixe, obj );
	}
}

// Sérialise un tableau d'éléments de formulaire ou un ensemble de
// clé/valeurs dans une chaîne de requête
jQuery.param = fonction (a, traditionnel) {
	préfixe var,
		s = [],
		ajouter = fonction (clé, valeurOuFonction) {

			// Si value est une fonction, invoquez-la et utilisez sa valeur de retour
			var valeur = isFunction( valueOrFunction ) ?
				valeurOuFonction() :
				valeurOuFonction ;

			s[ s.length ] = encodeURIComponent( clé ) + "=" +
				encodeURIComponent( valeur == null ? "" : valeur );
		} ;

	si ( une == nul ) {
		retour "";
	}

	// Si un tableau a été transmis, supposez qu'il s'agit d'un tableau d'éléments de formulaire.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Sérialise les éléments du formulaire
		jQuery.each( a, fonction() {
			add( this.name, this.value );
		} );

	} autre {

		// Si traditionnel, codez de la manière "ancienne" (la manière 1.3.2 ou antérieure
		// l'a fait), sinon encodez les paramètres de manière récursive.
		pour ( préfixe dans a ) {
			buildParams( préfixe, a[ préfixe ], traditionnel, ajouter );
		}
	}

	// Renvoie la sérialisation résultante
	return s.join( "&" );
} ;

jQuery.fn.extend( {
	sérialiser : function() {
		return jQuery.param( this.serializeArray() );
	},
	sérializeArray : fonction() {
		renvoie this.map( function() {

			// Peut ajouter un propHook pour les "éléments" pour filtrer ou ajouter des éléments de formulaire
			var elements = jQuery.prop(this, "elements" );
			éléments de retour ? jQuery.makeArray( elements ) : this;
		} ).filter( fonction() {
			var type = this.type;

			// Utilisez .is( ":disabled" ) pour que Fieldset[disabled] fonctionne
			renvoyer this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( fonction( _i, elem ) {
			var val = jQuery( this ).val();

			si ( val == nul ) {
				renvoie null ;
			}

			si ( Array.isArray( val ) ) {
				return jQuery.map( val, fonction( val ) {
					return { nom : elem.name, valeur : val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { nom : elem.name, valeur : val.replace( rCRLF, "\r\n" ) };
		} ).obtenir();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152 : détection de protocole local
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocole = /^\/\//,

	/* Préfiltres
	 * 1) Ils sont utiles pour introduire des types de données personnalisés (voir ajax/jsonp.js pour un exemple)
	 * 2) Ceux-ci sont appelés :
	 * - AVANT de demander un transport
	 * - APRÈS la sérialisation des paramètres (s.data est une chaîne si s.processData est vrai)
	 * 3) la clé est le type de données
	 * 4) le symbole fourre-tout "*" peut être utilisé
	 * 5) l'exécution commencera par transport dataType et PUIS continuera jusqu'à "*" si nécessaire
	 */
	préfiltres = {},

	/* Liaisons de transport
	 * 1) la clé est le type de données
	 * 2) le symbole fourre-tout "*" peut être utilisé
	 * 3) la sélection commencera par transport dataType et PUIS passera à "*" si nécessaire
	 */
	transports = {},

	// Évitez la séquence de caractères commentaire-prologue (trac-10098); doit apaiser les peluches et échapper à la compression
	allTypes = "*/".concat( "*" ),

	// Balise d'ancrage pour analyser l'origine du document
	originAnchor = document.createElement( "a" );

originAnchor.href = emplacement.href;

// Base "constructeur" pour jQuery.ajaxPrefilter et jQuery.ajaxTransport
fonction addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression est facultatif et la valeur par défaut est "*"
	fonction de retour (dataTypeExpression, func) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression ;
			dataTypeExpression = "*";
		}

		varType de données,
			je = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [] ;

		si ( estFonction( func ) ) {

			// Pour chaque type de données dans dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Ajouter un préfixe si demandé
				si ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*" ;
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Sinon, ajouter
				} autre {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	} ;
}

// Fonction d'inspection de base pour les préfiltres et les transports
function inspectPrefiltersOrTransports (structure, options, originalOptions, jqXHR) {

	var inspecté = {},
		seekTransport = ( structure === transports );

	fonction inspecter (type de données) {
		var sélectionné ;
		inspecté[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( type de dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspecter( dataTypeOrTransport );
				renvoie faux ;
			} sinon si ( seekTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		retour sélectionné ;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspecté[ "*" ] && inspect( "*" );
}

// Une extension spéciale pour les options ajax
// qui prend des options "plates" (à ne pas étendre en profondeur)
// Corrige trac-9887
fonction ajaxExtend (cible, src) {
	clé var, profonde,
		flatOptions = jQuery.ajaxSettings.flatOptions || {} ;

	pour (clé dans src) {
		if ( src[ clé ] !== non défini ) {
			( flatOptions[ clé ] ? target : ( deep || ( deep = {} ) ) )(clé ] = src[ clé ];
		}
	}
	si (profond) {
		jQuery.extend( true, target, deep );
	}

	cible de retour ;
}

/* Gère les réponses à une requête ajax :
 * - trouve le bon dataType (intermédiaire entre le type de contenu et le dataType attendu)
 * - renvoie la réponse correspondante
 */
function ajaxHandleResponses( s, jqXHR, réponses) {

	var ct, type, finalDataType, premierDataType,
		contenu = s.contenu,
		dataTypes = s.dataTypes ;

	// Supprime le type de données automatique et récupère le type de contenu dans le processus
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		si ( ct === non défini ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Vérifiez si nous avons affaire à un type de contenu connu
	si ( ct ) {
		pour (tapez le contenu) {
			if ( contenu[ type ] && contenu[ type ].test( ct ) ) {
				dataTypes.unshift(type);
				casser;
			}
		}
	}

	// Vérifiez si nous avons une réponse pour le type de données attendu
	if ( dataTypes[ 0 ] dans les réponses ) {
		finalDataType = dataTypes[ 0 ];
	} autre {

		// Essayez les types de données convertibles
		pour (tapez les réponses) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type ;
				casser;
			}
			si ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Ou utilise simplement le premier
		finalDataType = finalDataType || firstDataType ;
	}

	// Si nous trouvons un dataType
	// On ajoute le dataType à la liste si besoin
	// et renvoie la réponse correspondante
	si ( type de données final ) {
		si ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		renvoyer les réponses [ finalDataType ] ;
	}
}

/* Conversions en chaîne compte tenu de la requête et de la réponse d'origine
 * Définit également les champs réponseXXX sur l'instance jqXHR
 */
function ajaxConvert( s, réponse, jqXHR, isSuccess ) {
	var conv2, actuel, conv, tmp, précédent,
		convertisseurs = {},

		// Travailler avec une copie de dataTypes au cas où nous aurions besoin de la modifier pour la conversion
		dataTypes = s.dataTypes.slice();

	// Créer une carte de convertisseurs avec des clés minuscules
	si ( dataTypes[ 1 ] ) {
		pour ( conv dans s.converters ) {
			convertisseurs[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	actuel = dataTypes.shift();

	// Convertit en chaque type de données séquentiel
	tandis que (actuel) {

		if ( s.responseFields[ actuel ] ) {
			jqXHR[ s.responseFields[ current ] ] = réponse ;
		}

		// Applique le dataFilter s'il est fourni
		if ( !prev && isSuccess && s.dataFilter ) {
			réponse = s.dataFilter(réponse, s.dataType );
		}

		précédent = actuel ;
		actuel = dataTypes.shift();

		si (actuel) {

			// Il n'y a du travail à faire que si le type de données actuel n'est pas automatique
			si ( actuel === "*" ) {

				actuel = précédent ;

			// Convertit la réponse si le type de données précédent n'est pas automatique et diffère du courant
			} else if ( prev !== "*" && prev !== current ) {

				// Rechercher un convertisseur direct
				conv = convertisseurs[ préc + " " + courant ] || convertisseurs[ "* " + courant ];

				// Si aucun n'est trouvé, cherchez une paire
				si ( !conv ) {
					pour ( conv2 dans les convertisseurs ) {

						// Si conv2 génère le courant
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === courant ) {

							// Si prev peut être converti en entrée acceptée
							conv = convertisseurs[ prev + " " + tmp[ 0 ] ] ||
								convertisseurs[ "* " + tmp[ 0 ] ];
							si ( conv ) {

								// Condenser les convertisseurs d'équivalence
								si ( conv === vrai ) {
									conv = convertisseurs[ conv2 ];

								// Sinon, insérez le dataType intermédiaire
								} else if ( convertisseurs[ conv2 ] !== true ) {
									courant = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								casser;
							}
						}
					}
				}

				// Appliquer le convertisseur (sinon une équivalence)
				si ( conv !== vrai ) {

					// À moins que les erreurs ne soient autorisées à bouillonner, attrapez-les et renvoyez-les
					if ( conv && s.throws ) {
						réponse = conv( réponse );
					} autre {
						essayer {
							réponse = conv( réponse );
						} attraper ( e ) {
							retour {
								état : "erreur d'analyse",
								erreur : conv. ? e : "Pas de conversion de " + prev + " vers " + current
							} ;
						}
					}
				}
			}
		}
	}

	return { état : "succès", données : réponse } ;
}

jQuery.extend( {

	// Compteur pour conserver le nombre de requêtes actives
	actif : 0,

	// Cache d'en-tête Last-Modified pour la prochaine requête
	dernièreModification : {},
	étiquette : {},

	ajaxParamètres : {
		URL : emplacement.href,
		tapez : "OBTENIR",
		isLocal : rlocalProtocol.test( location.protocol),
		global : vrai,
		processData : vrai,
		asynchrone : vrai,
		contentType : "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		délai d'attente : 0,
		données : nulles,
		Type de données : nul,
		nom d'utilisateur : nul,
		mot de passe : nul,
		cache : nul,
		lance : faux,
		traditionnel : faux,
		en-têtes : {},
		*/

		accepte : {
			"*": tous les types,
			texte : "texte/plain",
			html : "texte/html",
			xml : "application/xml, texte/xml",
			json : "application/json, texte/javascript"
		},

		Contenu: {
			xml : /\bxml\b/,
			html : /\bhtml/,
			json : /\bjson\b/
		},

		Champs de réponse : {
			xml : "réponseXML",
			texte : "texteréponse",
			json : "réponseJSON"
		},

		// Convertisseurs de données
		// Les clés séparent les types source (ou fourre-tout "*") et destination avec un seul espace
		convertisseurs : {

			// Convertit n'importe quoi en texte
			"* texte": Chaîne,

			// Texte en HTML (true = pas de transformation)
			"texte html": vrai,

			// Évaluer le texte en tant qu'expression json
			"texte json": JSON.parse,

			// Analyser le texte au format XML
			"texte xml": jQuery.parseXML
		},

		// Pour les options qui ne doivent pas être étendues en profondeur :
		// vous pouvez ajouter vos propres options personnalisées ici si
		// et quand tu en crées un qui ne devrait pas l'être
		// étendu en profondeur (voir ajaxExtend)
		optionsflat : {
			URL : vrai,
			contexte : vrai
		}
	},

	// Crée un objet de paramètres à part entière dans la cible
	// avec les champs ajaxSettings et settings.
	// Si la cible est omise, écrit dans ajaxSettings.
	ajaxSetup : fonction (cible, paramètres) {
		retourner les paramètres ?

			// Construction d'un objet de paramètres
			ajaxExtend( ajaxExtend( cible, jQuery.ajaxSettings ), paramètres ) :

			// Extension d'ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, cible);
	},

	ajaxPrefilter : addToPrefiltersOrTransports (préfiltres),
	ajaxTransport : addToPrefiltersOrTransports( transports),

	// Méthode principale
	ajax : fonction (url, options) {

		// Si l'url est un objet, simule la signature pré-1.5
		if ( type d'url === "objet" ) {
			options = URL ;
			URL = non défini ;
		}

		// Force les options à être un objet
		options = options || {} ;

		transports varois,

			// URL sans paramètre anti-cache
			cacheURL,

			// En-têtes de réponse
			réponseHeadersString,
			en-têtes de réponse,

			// handle de délai d'attente
			timeoutTimer,

			// Var de nettoyage d'URL
			urlAnchor,

			// État de la requête (devient faux à l'envoi et vrai à la fin)
			complété,

			// Pour savoir si les événements globaux doivent être distribués
			FireGlobals,

			// Variable de boucle
			je,

			// partie non mise en cache de l'URL
			non mis en cache,

			// Crée l'objet d'options final
			s = jQuery.ajaxSetup( {}, options),

			// Contexte des rappels
			callbackContext = s.context || s,

			// Le contexte des événements globaux est callbackContext s'il s'agit d'un nœud DOM ou d'une collection jQuery
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Différés
			différé = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "une fois la mémoire" ),

			// Rappels dépendants du statut
			statusCode = s.statusCode || {},

			// En-têtes (ils sont envoyés tous en même temps)
			requestHeaders = {},
			requestHeadersNames = {},

			// Message d'abandon par défaut
			strAbort = "annulé",

			// Faux xhr
			jqXHR = {
				État prêt : 0,

				// Construit la table de hachage des en-têtes si nécessaire
				getResponseHeader : fonction (clé) {
					var correspond;
					si ( terminé ) {
						si ( !responseHeaders ) {
							réponseEn-têtes = {} ;
							while ( ( match = rheaders.exec (responseHeadersString ) ) ) {
								réponseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( réponseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = réponseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Chaîne brute
				getAllResponseHeaders : fonction() {
					retour terminé ? réponseHeadersString : null;
				},

				// Met en cache l'en-tête
				setRequestHeader : fonction (nom, valeur) {
					si ( terminé == null ) {
						nom = requestHeadersNames[ nom.toLowerCase() ] =
							requestHeadersNames[ nom.toLowerCase() ] || nom;
						requestHeaders[ nom ] = valeur ;
					}
					rends ceci ;
				},

				// Remplace l'en-tête de type de contenu de réponse
				overrideMimeType : fonction (type) {
					si ( terminé == null ) {
						s.mimeType = type;
					}
					rends ceci ;
				},

				// Rappels dépendants du statut
				statusCode : fonction (carte) {
					code variable ;
					si (carte) {
						si ( terminé ) {

							// Exécute les rappels appropriés
							jqXHR.always( map[ jqXHR.status ] );
						} autre {

							// Lazy-ajoute les nouveaux rappels de manière à préserver les anciens
							pour (code dans la carte) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					rends ceci ;
				},

				// Annule la demande
				abandonner : fonction (texte d'état) {
					var texte final = texte d'état || strAbort ;
					si ( transport ) {
						transport.abort( finalText );
					}
					done( 0, texte final );
					rends ceci ;
				}
			} ;

		// Attacher les différés
		différé.promise( jqXHR );

		// Ajouter un protocole s'il n'est pas fourni (les préfiltres peuvent s'y attendre)
		// Gère les fausses URL dans l'objet settings (trac-10093 : cohérence avec l'ancienne signature)
		// Nous utilisons également le paramètre url si disponible
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Option de méthode d'alias à saisir selon le ticket trac-12004
		s.type = options.méthode || options.type || s.méthode || s.type ;

		// Extraire la liste des types de données
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ " " ] ;

		// Une requête inter-domaines est de mise lorsque l'origine ne correspond pas à l'origine actuelle.
		si ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Prise en charge : IE <=8 - 11, Edge 12 - 15
			// IE lève une exception lors de l'accès à la propriété href si l'URL est mal formée,
			// par exemple http://exemple.com:80x/
			essayer {
				urlAnchor.href = s.url;

				// Prise en charge : IE <=8 - 11 uniquement
				// La propriété hôte d'Anchor n'est pas correctement définie lorsque s.url est relatif
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} attraper ( e ) {

				// S'il y a une erreur lors de l'analyse de l'URL, supposez qu'il s'agit de crossDomain,
				// il peut être rejeté par le transport s'il n'est pas valide
				s.crossDomain = true;
			}
		}

		// Convertit les données si ce n'est pas déjà une chaîne
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Appliquer des préfiltres
		inspectPrefiltersOrTransports( préfiltres, s, options, jqXHR );

		// Si la requête a été abandonnée dans un préfiltre, arrêtez-vous là
		si ( terminé ) {
			renvoyer jqXHR ;
		}

		// Nous pouvons déclencher des événements globaux dès maintenant si on nous le demande
		// Ne déclenche pas d'événements si jQuery.event n'est pas défini dans un scénario d'utilisation AMD (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Surveillez un nouvel ensemble de requêtes
		si ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Mettez le type en majuscule
		s.type = s.type.toUpperCase();

		// Détermine si la requête a du contenu
		s.hasContent = !rnoContent.test( s.type);

		// Enregistrez l'URL au cas où nous jouerions avec If-Modified-Since
		// et/ou en-tête If-None-Match plus tard
		// Supprime le hachage pour simplifier la manipulation de l'URL
		cacheURL = s.url.replace( rhash, "" );

		// Plus d'options de gestion pour les requêtes sans contenu
		si ( !s.hasContent ) {

			// Mémoriser le hachage pour pouvoir le remettre
			uncached = s.url.slice( cacheURL.length );

			// Si les données sont disponibles et doivent être traitées, ajoutez les données à l'URL
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682 : supprime les données afin qu'elles ne soient pas utilisées lors d'une éventuelle nouvelle tentative
				supprimer les données ;
			}

			// Ajouter ou mettre à jour le paramètre anti-cache si nécessaire
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					non mis en cache ;
			}

			// Mettez du hachage et de l'anti-cache sur l'URL qui sera demandée (gh-1732)
			s.url = cacheURL + non mis en cache ;

		// Remplacez '%20' par '+' s'il s'agit d'un contenu de corps de formulaire codé (gh-2658)
		} sinon si ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Définit l'en-tête If-Modified-Since et/ou If-None-Match, si en mode ifModified.
		if ( s.ifModified ) {
			si ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			si ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Définit l'en-tête correct, si les données sont envoyées
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Définit l'en-tête Accepts pour le serveur, en fonction du dataType
		jqXHR.setRequestHeader(
			"Accepter",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepte[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepte[ "*" ]
		);

		// Vérifie l'option des en-têtes
		pour ( je dans les en-têtes ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Autoriser les en-têtes/types MIME personnalisés et l'abandon anticipé
		if ( s.beforeSend &&
			( s.beforeSend.call ( callbackContext, jqXHR, s ) === false || terminé ) ) {

			// Abandonner si ce n'est pas déjà fait et revenir
			return jqXHR.abort();
		}

		// L'abandon n'est plus une annulation
		strAbort = "abandonner" ;

		// Installer les rappels sur les différés
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.erreur);

		// Obtenir le transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// S'il n'y a pas de transport, nous abandonnons automatiquement
		si ( !transport ) {
			done( -1, "Pas de transport" );
		} autre {
			jqXHR.readyState = 1 ;

			// Envoyer un événement global
			si ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// Si la requête a été abandonnée dans ajaxSend, arrêtez-vous là
			si ( terminé ) {
				renvoyer jqXHR ;
			}

			// Temps mort
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "délai d'attente" );
				}, à partir du délai d'attente );
			}

			essayer {
				terminé = faux ;
				transport.send( requestHeaders, done );
			} attraper ( e ) {

				// Relance les exceptions post-achèvement
				si ( terminé ) {
					lancez e;
				}

				// Propager les autres comme résultats
				fait( -1, e );
			}
		}

		// Rappel lorsque tout est terminé
		fonction terminée (statut, nativeStatusText, réponses, en-têtes) {
			var isSuccess, succès, erreur, réponse, modifié,
				statusText = nativeStatusText ;

			// Ignorer les invocations répétées
			si ( terminé ) {
				retour;
			}

			terminé = vrai ;

			// Efface le timeout s'il existe
			si ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Déréférencement du transport pour un premier garbage collection
			// (peu importe combien de temps l'objet jqXHR sera utilisé)
			transport = non défini ;

			// Cache les en-têtes de réponse
			réponseHeadersString = en-têtes || "" ;

			// Définir l'état prêt
			jqXHR.readyState = statut > 0 ? 4 : 0 ;

			// Détermine si c'est réussi
			isSuccess = statut >= 200 && statut < 300 || statut === 304 ;

			// Récupère les données de réponse
			si ( réponses ) {
				réponse = ajaxHandleResponses( s, jqXHR, réponses );
			}

			// Utilisez un convertisseur noop pour le script manquant mais pas si jsonp
			si ( !estSuccès &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "script texte" ] = function() {};
			}

			// Convertit quoi qu'il arrive (de cette façon, les champs réponseXXX sont toujours définis)
			réponse = ajaxConvert( s, réponse, jqXHR, isSuccess );

			// En cas de succès, gère le chaînage des types
			si ( est un succès ) {

				// Définit l'en-tête If-Modified-Since et/ou If-None-Match, si en mode ifModified.
				if ( s.ifModified ) {
					modifié = jqXHR.getResponseHeader( "Last-Modified" );
					si ( modifié ) {
						jQuery.lastModified[ cacheURL ] = modifié ;
					}
					modifié = jqXHR.getResponseHeader( "etag" );
					si ( modifié ) {
						jQuery.etag[ cacheURL ] = modifié ;
					}
				}

				// si pas de contenu
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "aucun contenu" ;

				// si non modifié
				} sinon si (statut === 304) {
					statusText = "non modifié" ;

				// Si nous avons des données, convertissons-les
				} autre {
					statusText = réponse.state;
					succès = réponse.data ;
					erreur = réponse.erreur;
					estSuccès = !erreur;
				}
			} autre {

				// Extraire l'erreur de statusText et normaliser pour les non-abandons
				erreur = texte d'état ;
				si ( statut || !statusText ) {
					statusText = "erreur" ;
					si (état < 0) {
						état = 0 ;
					}
				}
			}

			// Définir les données pour le faux objet xhr
			jqXHR.status = statut ;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Succès/Erreur
			si ( est un succès ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} autre {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Rappels dépendants du statut
			jqXHR.statusCode(statutCode);
			statusCode = non défini ;

			si ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccès ? succès : erreur ] );
			}

			// Complet
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			si ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Gérer le compteur AJAX global
				si ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		renvoyer jqXHR ;
	},

	getJSON : fonction (url, données, rappel) {
		return jQuery.get(url, données, rappel, "json" );
	},

	getScript : fonction (url, rappel) {
		return jQuery.get( url, non défini, rappel, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, méthode) {
	jQuery[méthode] = fonction(url, données, rappel, type) {

		// Décaler les arguments si l'argument data a été omis
		si ( estFonction( données ) ) {
			tapez = tapez || rappeler;
			rappel = données ;
			données = non défini ;
		}

		// L'url peut être un objet options (qui doit alors avoir .url)
		retourner jQuery.ajax( jQuery.extend( {
			URL : URL,
			type : méthode,
			Type de données : tapez,
			données : données,
			succès : rappel
		}, jQuery.isPlainObject( url ) && url ) );
	} ;
} );

jQuery.ajaxPrefilter( fonction( s ) {
	var je;
	pour ( je dans les en-têtes ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "" ;
		}
	}
} );


jQuery._evalUrl = fonction (url, options, doc) {
	retourner jQuery.ajax( {
		URL : URL,

		// Rendre cela explicite, puisque l'utilisateur peut remplacer cela via ajaxSetup (trac-11264)
		tapez : "OBTENIR",
		Type de données : "script",
		cache : vrai,
		asynchrone : faux,
		global : faux,

		// N'évalue la réponse que si elle réussit (gh-4126)
		// dataFilter n'est pas invoqué pour les réponses d'échec, donc utilisez-le à la place
		// du convertisseur par défaut est fastidieux mais ça marche.
		convertisseurs : {
			"script texte": function() {}
		},
		dataFilter : fonction (réponse) {
			jQuery.globalEval( réponse, options, doc );
		}
	} );
} ;


jQuery.fn.extend( {
	wrapAll : fonction (html) {
		var envelopper;

		si ( ceci[ 0 ] ) {
			si ( estFonction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// Les éléments autour desquels envelopper la cible
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			si ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( fonction() {
				var elem = ceci;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				renvoyer l'élément ;
			} ).append( ceci );
		}

		rends ceci ;
	},

	wrapInner : fonction (html) {
		si ( estFonction( html ) ) {
			renvoie this.each( function( i ) {
				jQuery( ceci ).wrapInner( html.call( ceci, je ) );
			} );
		}

		renvoie this.each( function() {
			var self = jQuery (ceci),
				content = self.contents();

			si ( contenu.longueur ) {
				contents.wrapAll( html );

			} autre {
				self.append( html );
			}
		} );
	},

	enveloppe : fonction (html) {
		var htmlIsFunction = isFunction( html );

		renvoie this.each( function( i ) {
			jQuery( ceci ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	déballer : fonction (sélecteur) {
		this.parent( sélecteur ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		rends ceci ;
	}
} );


jQuery.expr.pseudos.hidden = fonction (elem) {
	return !jQuery.expr.pseudos.visible( elem );
} ;
jQuery.expr.pseudos.visible = fonction (elem) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
} ;




jQuery.ajaxSettings.xhr = fonction() {
	essayer {
		renvoie une nouvelle fenêtre.XMLHttpRequest();
	} attraper ( e ) {}
} ;

var xhrSuccessStatus = {

		// Le protocole de fichier donne toujours le code d'état 0, supposons 200
		0 : 200,

		// Prise en charge : IE <=9 uniquement
		// trac-1450 : parfois IE renvoie 1223 alors qu'il devrait être 204
		1223 : 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" dans xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( fonction( options ) {
	var rappel, errorCallback;

	// Cross-domain autorisé uniquement s'il est pris en charge via XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		retour {
			envoyer : fonction (en-têtes, complet) {
				var je,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.nom d'utilisateur,
					options.mot de passe
				);

				// Appliquer des champs personnalisés s'ils sont fournis
				si ( options.xhrFields ) {
					pour ( je dans options.xhrFields ) {
						xhr[ je ] = options.xhrFields[ je ];
					}
				}

				// Remplace le type MIME si nécessaire
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// En-tête X-Requested-With
				// Pour les requêtes inter-domaines, étant donné que les conditions d'un contrôle en amont sont
				// semblable à un puzzle, nous ne le définissons tout simplement jamais pour en être sûr.
				// (il peut toujours être défini requête par requête ou même en utilisant ajaxSetup)
				// Pour les requêtes du même domaine, ne changera pas l'en-tête s'il est déjà fourni.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					en-têtes[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Définir les en-têtes
				pour ( i dans les en-têtes ) {
					xhr.setRequestHeader( je, en-têtes[ je ] );
				}

				// Rappeler
				rappel = fonction (type) {
					fonction de retour() {
						si (rappel) {
							rappel = erreurCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null ;

							if ( tapez === "abandonner" ) {
								xhr.abort();
							} else if ( tapez === "erreur" ) {

								// Prise en charge : IE <=9 uniquement
								// Lors d'un abandon natif manuel, IE9 lance
								// erreurs sur tout accès à une propriété qui n'est pas readyState
								if ( typeof xhr.status !== "numéro" ) {
									compléter( 0, "erreur" );
								} autre {
									complet(

										// Fichier : le protocole donne toujours le statut 0 ; voir trac-8605, trac-14207
										xhr.statut,
										xhr.statusText
									);
								}
							} autre {
								complet(
									xhrSuccessStatus[ xhr.status ] || xhr.statut,
									xhr.statusText,

									// Prise en charge : IE <=9 uniquement
									// IE9 n'a pas de XHR2 mais lance du binaire (trac-11426)
									// Pour le non-texte XHR2, laissez l'appelant le gérer (gh-2498)
									( xhr.responseType || "texte" ) !== "texte" ||
									typeof xhr.responseText !== "string" ?
										{ binaire : xhr.response } :
										{ texte : xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					} ;
				} ;

				// Écouter les événements
				xhr.onload = rappel();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "erreur" );

				// Prise en charge : IE 9 uniquement
				// Utilisez onreadystatechange pour remplacer onabort
				// pour gérer les abandons non interceptés
				if ( xhr.onabort !== non défini ) {
					xhr.onabort = errorCallback;
				} autre {
					xhr.onreadystatechange = fonction() {

						// Vérifiez readyState avant l'expiration du délai à mesure qu'il change
						si ( xhr.readyState === 4 ) {

							// Autorise l'appel d'une erreur en premier,
							// mais cela ne gérera pas un abandon natif
							// Enregistrez également errorCallback dans une variable
							// car xhr.onerror n'est pas accessible
							window.setTimeout( fonction() {
								si (rappel) {
									errorCallback();
								}
							} );
						}
					} ;
				}

				// Crée le rappel d'abandon
				callback = callback( "abandonner" );

				essayer {

					// Envoyez la requête (cela peut déclencher une exception)
					xhr.send( options.hasContent && options.data || null );
				} attraper ( e ) {

					// trac-14683 : relancez uniquement si cela n'a pas encore été notifié comme une erreur
					si (rappel) {
						lancez e;
					}
				}
			},

			abandonner : fonction() {
				si (rappel) {
					rappeler();
				}
			}
		} ;
	}
} );




// Empêche l'exécution automatique des scripts lorsqu'aucun type de données explicite n'est fourni (Voir gh-2432)
jQuery.ajaxPrefilter( fonction( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Installer le type de données du script
jQuery.ajaxSetup( {
	accepte : {
		script : "texte/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	Contenu: {
		script : /\b(?:java|ecma)script\b/
	},
	convertisseurs : {
		"script texte": fonction (texte) {
			jQuery.globalEval( texte );
			renvoyer du texte ;
		}
	}
} );

// Gérer le cas particulier du cache et crossDomain
jQuery.ajaxPrefilter( "script", fonction(s) {
	if ( s.cache === non défini ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET" ;
	}
} );

// Lier le transport de hack de balise de script
jQuery.ajaxTransport( "script", fonction( s ) {

	// Ce transport ne traite que les requêtes inter-domaines ou forcées par attrs
	si ( s.crossDomain || s.scriptAttrs ) {
		script var, rappel ;
		retour {
			envoyer : fonction (_, compléter) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { jeu de caractères : s.scriptCharset, src : s.url } )
					.on( "erreur de chargement", callback = function( evt ) {
						script.remove();
						rappel = nul ;
						si ( événement ) {
							complete( evt.type === "erreur" ? 404 : 200, evt.type );
						}
					} );

				// Utilisez la manipulation native du DOM pour éviter notre supercherie domManip AJAX
				document.head.appendChild( script[ 0 ] );
			},
			abandonner : fonction() {
				si (rappel) {
					rappeler();
				}
			}
		} ;
	}
} );




var vieuxCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Paramètres jsonp par défaut
jQuery.ajaxSetup( {
	jsonp : "rappel",
	jsonpCallback : fonction() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ rappel ] = vrai ;
		retour de rappel ;
	}
} );

// Détecter, normaliser les options et installer des rappels pour les requêtes jsonp
jQuery.ajaxPrefilter( "json jsonp", fonction( s, originalSettings, jqXHR ) {

	var callbackName, écrasé, réponseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			type de s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "données"
		);

	// Gère si le type de données attendu est "jsonp" ou si nous avons un paramètre à définir
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Récupère le nom du rappel, en mémorisant la valeur préexistante qui lui est associée
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback ;

		// Insère un rappel dans l'URL ou les données du formulaire
		si ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} sinon if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Utiliser le convertisseur de données pour récupérer json après l'exécution du script
		s.converters[ "script json" ] = fonction() {
			si ( !responseContainer ) {
				jQuery.error( callbackName + " n'a pas été appelé" );
			}
			return réponseContainer[ 0 ];
		} ;

		// Forcer le type de données json
		s.dataTypes[ 0 ] = "json";

		// Installer le rappel
		écrasé = window[ callbackName ];
		fenêtre[ nom de rappel ] = fonction() {
			réponseContainer = arguments ;
		} ;

		// Fonction de nettoyage (se déclenche après les convertisseurs)
		jqXHR.always( function() {

			// Si la valeur précédente n'existait pas, supprimez-la
			if ( écrasé === non défini ) {
				jQuery( fenêtre ).removeProp( callbackName );

			// Sinon, restaure la valeur préexistante
			} autre {
				window[callbackName] = écrasé ;
			}

			// Enregistrer gratuitement
			if ( s[ nom de rappel ] ) {

				// Assurez-vous que la réutilisation des options ne gâche pas les choses
				s.jsonpCallback = originalSettings.jsonpCallback ;

				// Enregistre le nom du rappel pour une utilisation future
				oldCallbacks.push( callbackName );
			}

			// Appel si c'était une fonction et on a une réponse
			if ( réponseContainer && isFunction ( écrasé ) ) {
				écrasé (responseContainer[ 0 ] );
			}

			réponseContainer = écrasé = non défini ;
		} );

		// Déléguer au script
		renvoie "script" ;
	}
} );




// Prise en charge : Safari 8 uniquement
// Dans Safari 8, documents créés via document.implementation.createHTMLDocument
// réduit les formes frères et sœurs : le deuxième devient l'enfant du premier.
// Pour cette raison, cette mesure de sécurité doit être désactivée dans Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// L'argument "data" doit être une chaîne HTML
// contexte (facultatif) : Si précisé, le fragment sera créé dans ce contexte,
// par défaut, documenter
// keepScripts (facultatif) : si vrai, inclura les scripts passés dans la chaîne html
jQuery.parseHTML = fonction (données, contexte, keepScripts) {
	if ( type de données !== "string" ) {
		retour [];
	}
	if ( type de contexte === "booléen" ) {
		keepScripts = contexte ;
		contexte = faux ;
	}

	var base, analysé, scripts ;

	si ( !contexte ) {

		// Empêche l'exécution immédiate des scripts ou des gestionnaires d'événements en ligne
		// en utilisant document.implementation
		si ( support.createHTMLDocument ) {
			contexte = document.implementation.createHTMLDocument( "" );

			// Définit le href de base pour le document créé
			// donc tous les éléments analysés avec des URL
			// sont basés sur l'URL du document (gh-2965)
			base = contexte.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base);
		} autre {
			contexte = document ;
		}
	}

	analysé = rsingleTag.exec( données );
	scripts = !keepScripts && [];

	// Balise unique
	si ( analysé ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	analysé = buildFragment( [ données ], contexte, scripts );

	si ( scripts && scripts.longueur ) {
		jQuery(scripts).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
} ;


/**
 * Charger une URL dans une page
 */
jQuery.fn.load = fonction (url, paramètres, rappel) {
	sélecteur var, type, réponse,
		soi = ceci,
		off = url.indexOf( " " );

	si ( désactivé > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// Si c'est une fonction
	si ( isFunction( params ) ) {

		// On suppose que c'est le rappel
		rappel = paramètres ;
		paramètres = non défini ;

	// Sinon, construis une chaîne de paramètres
	} else if ( params && typeof params === "objet" ) {
		tapez = "POST" ;
	}

	// Si nous avons des éléments à modifier, faire la demande
	if ( self.length > 0 ) {
		jQuery.ajax( {
			URL : URL,

			// Si la variable "type" n'est pas définie, alors la méthode "GET" sera utilisée.
			// Rendre explicite la valeur de ce champ puisque
			// l'utilisateur peut le remplacer via la méthode ajaxSetup
			tapez : tapez || "OBTENIR",
			Type de données : "html",
			données : paramètres
		} ).done( fonction( texteréponse ) {

			// Enregistre la réponse pour l'utiliser dans un rappel complet
			réponse = arguments ;

			self.html( sélecteur ?

				// Si un sélecteur a été spécifié, localisez les bons éléments dans un div factice
				// Exclure les scripts pour éviter les erreurs IE « Autorisation refusée »
				jQuery( "<div>" ).append( jQuery.parseHTML( réponseText ) ).find( sélecteur ) :

				// Sinon, utilise le résultat complet
				texteréponse );

		// Si la requête réussit, cette fonction obtient "data", "status", "jqXHR"
		// mais ils sont ignorés car la réponse a été définie ci-dessus.
		// En cas d'échec, cette fonction obtient "jqXHR", "status", "error"
		} ).always( rappel && fonction( jqXHR, statut ) {
			self.each( fonction() {
				callback.apply( this, réponse || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	rends ceci ;
} ;




jQuery.expr.pseudos.animated = fonction (elem) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).longueur;
} ;




jQuery.offset = {
	setOffset : fonction (élément, options, je) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			accessoires = {} ;

		// Définir la position en premier, au cas où haut/gauche serait défini même sur un élément statique
		if ( position === "statique" ) {
			elem.style.position = "relatif" ;
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "gauche" );
		calculatePosition = ( position === "absolu" || position === "fixe" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Il faut pouvoir calculer la position si l'un ou l'autre
		// en haut ou à gauche est automatique et la position est absolue ou fixe
		si ( calculerPosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} autre {
			curTop = parseFloat( curCSSTop ) || 0 ;
			curLeft = parseFloat( curCSSLeft ) || 0 ;
		}

		si ( estFonction( options ) ) {

			// Utilisez jQuery.extend ici pour autoriser la modification de l'argument des coordonnées (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		si ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		si ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "utiliser" dans les options ) {
			options.using.call( elem, props );

		} autre {
			curElem.css( accessoires );
		}
	}
} ;

jQuery.fn.extend( {

	// offset() relie la zone de bordure d'un élément à l'origine du document
	décalage : fonction (options) {

		// Préserver le chaînage pour le passeur
		si ( arguments.longueur ) {
			options de retour === non défini ?
				ce :
				this.each( fonction( je ) {
					jQuery.offset.setOffset( ceci, options, i );
				} );
		}

		var rect, gagner,
			elem = ceci[ 0 ];

		si ( !elem ) {
			retour;
		}

		// Renvoie des zéros pour les éléments déconnectés et masqués (affichage : aucun) (gh-2310)
		// Prise en charge : IE <=11 uniquement
		// Exécution de getBoundingClientRect sur un
		// Le nœud déconnecté dans IE génère une erreur
		si ( !elem.getClientRects().length ) {
			return { haut : 0, gauche : 0 } ;
		}

		// Obtenez la position relative du document en ajoutant le défilement de la fenêtre au gBCR relatif à la fenêtre
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView ;
		retour {
			en haut : rect.top + win.pageYOffset,
			gauche : rect.left + win.pageXOffset
		} ;
	},

	// position() relie la zone de marge d'un élément à la zone de remplissage de son parent décalé
	// Cela correspond au comportement du positionnement absolu CSS
	position : fonction() {
		si ( !this[ 0 ] ) {
			retour;
		}

		var offsetParent, offset, doc,
			elem = ceci[ 0 ],
			parentOffset = { haut : 0, gauche : 0 } ;

		// position : les éléments fixes sont décalés par rapport à la fenêtre, qui elle-même a toujours un décalage nul
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Supposons que position:fixed implique la disponibilité de getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} autre {
			offset = this.offset();

			// Prise en compte du parent de décalage *réel*, qui peut être le document ou son élément racine
			// lorsqu'un élément positionné statiquement est identifié
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement ;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "statique" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorpore les bordures dans son décalage, car elles sont en dehors de l'origine de son contenu
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Soustraire les décalages parents et les marges des éléments
		retour {
			top : offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			gauche : offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		} ;
	},

	// Cette méthode renverra documentElement dans les cas suivants :
	// 1) Pour l'élément à l'intérieur de l'iframe sans offsetParent, cette méthode renverra
	// documentElement de la fenêtre parent
	// 2) Pour l'élément caché ou détaché
	// 3) Pour le corps ou l'élément html, c'est à dire dans le cas du nœud html - il se retournera tout seul
	//
	// mais ces exceptions n'ont jamais été présentées comme des cas d'utilisation réels
	// et pourraient être considérés comme des résultats plus préférables.
	//
	// Cette logique n'est cependant pas garantie et peut changer à tout moment dans le futur
	offsetParent : fonction() {
		renvoie this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent ;
			}

			retourner offsetParent || documentElement ;
		} );
	}
} );

// Crée les méthodes scrollLeft et scrollTop
jQuery.each( { scrollLeft : "pageXOffset", scrollTop : "pageYOffset" }, function( méthode, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ méthode ] = fonction( val ) {
		retourner l'accès (this, fonction (elem, méthode, val) {

			// Fusionner les documents et les fenêtres
			var gagne;
			si ( isWindow( elem ) ) {
				gagner = élém ;
			} sinon si ( elem.nodeType === 9 ) {
				gagner = elem.defaultView ;
			}

			si ( val === non défini ) {
				retour gagnant ? win[ prop ] : elem[ méthode ];
			}

			si (gagner) {
				gagner.scrollTo(
					!haut ? val : win.pageXOffset,
					haut ? val : win.pageYOffset
				);

			} autre {
				elem[ méthode ] = val;
			}
		}, méthode, val, arguments.length );
	} ;
} );

// Prise en charge : Safari <=7 - 9.1, Chrome <=37 - 49
// Ajoutez les cssHooks supérieur/gauche en utilisant jQuery.fn.position
// Bogue du Webkit : https://bugs.webkit.org/show_bug.cgi?id=29084
// Bug clignotant : https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle renvoie un pourcentage lorsqu'il est spécifié pour haut/gauche/bas/droite ;
// plutôt que de faire dépendre le module CSS du module offset, vérifiez-le ici
jQuery.each( [ "top", "gauche" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		fonction (élément, calculé) {
			si ( calculé ) {
				calculé = curCSS( elem, prop );

				// Si curCSS renvoie un pourcentage, retour à offset
				return rnumnonpx.test (calculé) ?
					jQuery( elem ).position()[ prop ] + "px" :
					calculé;
			}
		}
	);
} );


// Crée les méthodes innerHeight, innerWidth, height, width, externalHeight et externalWidth
jQuery.each( { Hauteur : "hauteur", Largeur : "largeur" ​​}, fonction (nom, type) {
	jQuery.each( {
		rembourrage : "intérieur" + nom,
		contenu : tapez,
		"": "extérieur" + nom
	}, fonction( defaultExtra, funcName ) {

		// La marge est uniquement pour externalHeight, externalWidth
		jQuery.fn[ funcName ] = fonction (marge, valeur) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = par défautExtra || ( margin === true || value === true ? "margin" : "border" );

			return access (this, fonction (elem, type, valeur) {
				vardoc;

				si ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height retourne avec les barres de défilement incluses (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "intérieur" + nom ] :
						elem.document.documentElement[ "client" + nom];
				}

				// Récupère la largeur ou la hauteur du document
				si ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Soit scroll[Largeur/Hauteur], soit offset[Largeur/Hauteur] ou client[Largeur/Hauteur],
					// celui qui est le plus grand
					retourner Math.max(
						elem.body[ "défilement" + nom], doc[ "défilement" + nom],
						elem.body[ "offset" + nom ], doc[ "offset" + nom ],
						doc[ "client" + nom ]
					);
				}

				valeur de retour === non défini ?

					// Récupère la largeur ou la hauteur de l'élément, en demandant mais sans forcer parseFloat
					jQuery.css( elem, type, extra ) :

					// Définir la largeur ou la hauteur de l'élément
					jQuery.style( elem, type, valeur, extra );
			}, tapez, chaînable ? margin : indéfini, chaînable );
		} ;
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplet",
	"Erreur ajax",
	"ajaxSuccès",
	"ajaxEnvoyer"
], fonction( _i, tapez ) {
	jQuery.fn[type] = fonction(fn) {
		renvoie this.on( type, fn );
	} ;
} );




jQuery.fn.extend( {

	bind: fonction (types, données, fn) {
		return this.on( types, null, data, fn );
	},
	dissocier : fonction (types, fn) {
		return this.off( types, null, fn );
	},

	délégué : fonction (sélecteur, types, données, fn) {
		return this.on( types, sélecteur, données, fn );
	},
	annuler la délégation : fonction (sélecteur, types, fn) {

		// ( espace de noms ) ou ( sélecteur, types [, fn] )
		return arguments.length === 1 ?
			this.off( sélecteur, "**" ) :
			this.off( types, sélecteur || "**", fn );
	},

	survol : fonction (fnOver, fnOut) {
		rends ceci
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	("flou focus focusin focusout redimensionner défilement clic dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"changer, sélectionner, soumettre, appuyer sur la touche, appuyer sur la touche, menu contextuel" ).split( " " ),
	fonction( _i, nom ) {

		// Gérer la liaison d'événement
		jQuery.fn[nom] = fonction(données, fn) {
			retourner arguments.longueur > 0 ?
				this.on( nom, null, données, fn ) :
				this.trigger( nom );
		} ;
	}
);




// Prise en charge : Android <=4.0 uniquement
// Assurez-vous de supprimer BOM et NBSP
// Exiger que "l'exécution des espaces" démarre à partir d'un espace non-blanc
// pour éviter le comportement O(N^2) lorsque le moteur essaierait de faire correspondre "\s+$" à chaque position de l'espace.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Lier une fonction à un contexte, en appliquant éventuellement partiellement n'importe quel
// arguments.
// jQuery.proxy est obsolète pour promouvoir les standards (en particulier Function#bind)
// Cependant, sa suppression n'est pas prévue de si tôt
jQuery.proxy = fonction (fn, contexte) {
	var tmp, arguments, proxy ;

	if ( type de contexte === "string" ) {
		tmp = fn[contexte];
		contexte = fn ;
		fn = tmp;
	}

	// Vérification rapide pour déterminer si la cible est appelable, dans la spécification
	// cela renvoie une TypeError, mais nous renverrons simplement undefined.
	si ( !isFunction( fn ) ) {
		retourner indéfini ;
	}

	// Liaison simulée
	args = tranche.call( arguments, 2 );
	proxy = fonction() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	} ;

	// Définit le GUID du gestionnaire unique sur le même que celui du gestionnaire d'origine, afin qu'il puisse être supprimé
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	renvoyer un proxy ;
} ;

jQuery.holdReady = fonction (hold) {
	si ( tenir ) {
		jQuery.readyWait++;
	} autre {
		jQuery.ready( true );
	}
} ;
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.maintenant ;

jQuery.isNumeric = fonction (obj) {

	// Depuis jQuery 3.0, isNumeric est limité à
	// chaînes et nombres (primitives ou objets)
	// qui peut être contraint à des nombres finis (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "numéro" || type === "string" ) &&

		// parseFloat NaNs faux positifs à conversion numérique ("")
		// ... mais interprète mal les chaînes de nombres non significatifs, en particulier les littéraux hexadécimaux ("0x...")
		// la soustraction force les infinis à NaN
		!isNaN( obj - parseFloat( obj ) );
} ;

jQuery.trim = fonction (texte) {
	renvoyer le texte == null ?
		"" :
		( texte + "" ).replace( rtrim, "$1" );
} ;



// Enregistrez-vous en tant que module AMD nommé, puisque jQuery peut être concaténé avec d'autres
// fichiers pouvant utiliser la définition, mais pas via un script de concaténation approprié qui
// comprend les modules AMD anonymes. Un AMD nommé est le plus sûr et le plus robuste
// façon de s'inscrire. Jquery minuscule est utilisé car les noms des modules AMD sont
// dérivé des noms de fichiers, et jQuery est normalement livré en minuscule
// nom de fichier. Faites ceci après avoir créé le global afin que si un module AMD souhaite
// pour appeler noConflict pour cacher cette version de jQuery, ça marchera.

// Notez que pour une portabilité maximale, les bibliothèques qui ne sont pas jQuery doivent
// se déclarent comme modules anonymes et évitent de définir un global si un
// Le chargeur AMD est présent. jQuery est un cas particulier. Pour plus d'informations, voir
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( type de définition === "fonction" && définir.amd ) {
	définir( "jquery", [], fonction() {
		renvoyer jQuery ;
	} );
}




var

	// Mapper sur jQuery en cas d'écrasement
	_jQuery = fenêtre.jQuery,

	// Mapper le $ en cas d'écrasement
	_$ = fenêtre.$;

jQuery.noConflict = fonction (profond) {
	si ( fenêtre.$ === jQuery ) {
		fenêtre.$ = _$;
	}

	si ( profond && window.jQuery === jQuery ) {
		fenêtre.jQuery = _jQuery ;
	}

	renvoyer jQuery ;
} ;

// Expose les identifiants jQuery et $, même dans AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// et CommonJS pour les émulateurs de navigateur (trac-13566)
if ( typeof noGlobal === "indéfini" ) {
	fenêtre.jQuery = fenêtre.$ = jQuery ;
}




renvoyer jQuery ;
} );