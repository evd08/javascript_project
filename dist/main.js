/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dictionary.js":
/*!***************************!*\
  !*** ./src/dictionary.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Dictionary {\n\n  constructor() {\n    this.words = ['ACCOUNT', 'ACCURATE', 'ACRES', 'ACROSS', 'ACT', 'ACTION', 'ACTIVE', 'ACTIVITY',\n      'ACTUAL', 'ACTUALLY', 'ADD', 'ADDITION', 'ADDITIONAL', 'ADJECTIVE', 'ADULT', 'ADVENTURE',\n      'ADVICE', 'AFFECT', 'AFRAID', 'AFTER', 'AFTERNOON', 'AGAIN', 'AGAINST', 'AGE',\n      'AGO', 'AGREE', 'AHEAD', 'AID', 'AIR', 'AIRPLANE', 'ALIKE', 'ALIVE',\n      'ALL', 'ALLOW', 'ALMOST', 'ALONE', 'ALONG', 'ALOUD', 'ALPHABET', 'ALREADY',\n      'ALSO', 'ALTHOUGH', 'AM', 'AMONG', 'AMOUNT', 'ANCIENT', 'ANGLE', 'ANGRY',\n      'ANIMAL', 'ANNOUNCED', 'ANOTHER', 'ANSWER', 'ANTS', 'ANY', 'ANYBODY', 'ANYONE',\n      'ANYTHING', 'ANYWAY', 'ANYWHERE', 'APART', 'APARTMENT', 'APPEARANCE', 'APPLE', 'APPLIED',\n      'APPROPRIATE', 'ARE', 'AREA', 'ARM', 'ARMY', 'AROUND', 'ARRANGE', 'ARRANGEMENT',\n      'ARRIVE', 'ARROW', 'ART', 'ARTICLE', 'AS', 'ASIDE', 'ASK', 'ASLEEP',\n      'AT', 'ATE', 'ATMOSPHERE', 'ATOM', 'ATOMIC', 'ATTACHED', 'ATTACK', 'ATTEMPT',\n      'ATTENTION', 'AUDIENCE', 'AUTHOR', 'AUTOMOBILE', 'AVAILABLE', 'AVERAGE', 'AVOID', 'AWARE',\n      'AWAY', 'BABY', 'BACK', 'BAD', 'BADLY', 'BAG', 'BALANCE', 'BALL',\n      'BALLOON', 'BAND', 'BANK', 'BAR', 'BARE', 'BARK', 'BARN', 'BASE',\n      'BASEBALL', 'BASIC', 'BASIS', 'BASKET', 'BAT', 'BATTLE', 'BE', 'BEAN',\n      'BEAR', 'BEAT', 'BEAUTIFUL', 'BEAUTY', 'BECAME', 'BECAUSE', 'BECOME', 'BECOMING',\n      'BEE', 'BEEN', 'BEFORE', 'BEGAN', 'BEGINNING', 'BEGUN', 'BEHAVIOR', 'BEHIND',\n      'BEING', 'BELIEVED', 'BELL', 'BELONG', 'BELOW', 'BELT', 'BEND', 'BENEATH',\n      'BENT', 'BESIDE', 'BEST', 'BET', 'BETTER', 'BETWEEN', 'BEYOND', 'BICYCLE',\n      'BIGGER', 'BIGGEST', 'BILL', 'BIRDS', 'BIRTH', 'BIRTHDAY', 'BIT', 'BITE',\n      'BLACK', 'BLANK', 'BLANKET', 'BLEW', 'BLIND', 'BLOCK', 'BLOOD', 'BLOW',\n      'BLUE', 'BOARD', 'BOAT', 'BODY', 'BONE', 'BOOK', 'BORDER', 'BORN',\n      'BOTH', 'BOTTLE', 'BOTTOM', 'BOUND', 'BOW', 'BOWL', 'BOX', 'BOY',\n      'BRAIN', 'BRANCH', 'BRASS', 'BRAVE', 'BREAD', 'BREAK', 'BREAKFAST', 'BREATH',\n      'BREATHE', 'BREATHING', 'BREEZE', 'BRICK', 'BRIDGE', 'BRIEF', 'BRIGHT', 'BRING',\n      'BROAD', 'BROKE', 'BROKEN', 'BROTHER', 'BROUGHT', 'BROWN', 'BRUSH', 'BUFFALO',\n      'BUILD', 'BUILDING', 'BUILT', 'BURIED', 'BURN', 'BURST', 'BUS', 'BUSH',\n      'BUSINESS', 'BUSY', 'BUT', 'BUTTER', 'BUY', 'BY', 'CABIN', 'CAGE',\n      'CAKE', 'CALL', 'CALM', 'CAME', 'CAMERA', 'CAMP', 'CAN', 'CANAL',\n      'CANNOT', 'CAP', 'CAPITAL', 'CAPTAIN', 'CAPTURED', 'CAR', 'CARBON', 'CARD',\n      'CARE', 'CAREFUL', 'CAREFULLY', 'CARRIED', 'CARRY', 'CASE', 'CAST', 'CASTLE',\n      'CAT', 'CATCH', 'CATTLE', 'CAUGHT', 'CAUSE', 'CAVE', 'CELL', 'CENT',\n      'CENTER', 'CENTRAL', 'CENTURY', 'CERTAIN', 'CERTAINLY', 'CHAIN', 'CHAIR', 'CHAMBER',\n      'CHANCE', 'CHANGE', 'CHANGING', 'CHAPTER', 'CHARACTER', 'CHARACTERISTIC', 'CHARGE', 'CHART',\n      'CHECK', 'CHEESE', 'CHEMICAL', 'CHEST', 'CHICKEN', 'CHIEF', 'CHILD', 'CHILDREN',\n      'CHOICE', 'CHOOSE', 'CHOSE', 'CHOSEN', 'CHURCH', 'CIRCLE', 'CIRCUS', 'CITIZEN',\n      'CITY', 'CLASS', 'CLASSROOM', 'CLAWS', 'CLAY', 'CLEAN', 'CLEAR', 'CLEARLY',\n      'CLIMATE', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOSET', 'CLOSELY', 'CLOSER', 'CLOTH', 'CLOTHES',\n      'CLOTHING', 'CLOUD', 'CLUB', 'COACH', 'COAL', 'COAST', 'COAT', 'CODEPEN', 'COFFEE',\n      'COLD', 'COLLECT', 'COLLEGE', 'COLONY', 'COLOR', 'COLUMN', 'COMBINATION', 'COMBINE',\n      'COME', 'COMFORTABLE', 'COMING', 'COMMAND', 'COMMON', 'COMMUNITY', 'COMPANY', 'COMPARE',\n      'COMPASS', 'COMPLETE', 'COMPLETELY', 'COMPLEX', 'COMPOSED', 'COMPOSITION', 'COMPOUND', 'CONCERNED',\n      'CONDITION', 'CONGRESS', 'CONNECTED', 'CONSIDER', 'CONSIST', 'CONSONANT', 'CONSTANTLY', 'CONSTRUCTION',\n      'CONTAIN', 'CONTINENT', 'CONTINUED', 'CONTRAST', 'CONTROL', 'CONVERSATION', 'COOK', 'COOKIES',\n      'COOL', 'COPPER', 'COPY', 'CORN', 'CORNER', 'CORRECT', 'CORRECTLY', 'COST',\n      'COTTON', 'COULD', 'COUNT', 'COUNTRY', 'COUPLE', 'COURAGE', 'COURSE', 'COURT',\n      'COVER', 'COW', 'COWBOY', 'CRACK', 'CREAM', 'CREATE', 'CREATURE', 'CREW',\n      'CROP', 'CROSS', 'CROWD', 'CRY', 'CUP', 'CURIOUS', 'CURRENT', 'CURVE',\n      'CUSTOMS', 'CUT', 'CUTTING', 'DAILY', 'DAMAGE', 'DANCE', 'DANGER', 'DANGEROUS',\n      'DARK', 'DARKNESS', 'DATE', 'DAUGHTER', 'DAWN', 'DAY', 'DEAD', 'DEAL',\n      'DEAR', 'DEATH', 'DECIDE', 'DECLARED', 'DEEP', 'DEEPLY', 'DEER', 'DEFINITION',\n      'DEGREE', 'DEPEND', 'DEPTH', 'DESCRIBE', 'DESERT', 'DESIGN', 'DESK', 'DETAIL',\n      'DETERMINE', 'DEVELOP', 'DEVELOPMENT', 'DIAGRAM', 'DIAMETER', 'DID', 'DIE', 'DIFFER',\n      'DIFFERENCE', 'DIFFERENT', 'DIFFICULT', 'DIFFICULTY', 'DIG', 'DINNER', 'DIRECT', 'DIRECTION',\n      'DIRECTLY', 'DIRT', 'DIRTY', 'DISAPPEAR', 'DISCOVER', 'DISCOVERY', 'DISCUSS', 'DISCUSSION',\n      'DISEASE', 'DISH', 'DISTANCE', 'DISTANT', 'DIVIDE', 'DIVISION', 'DO', 'DOCTOR',\n      'DOES', 'DOG', 'DOING', 'DOLL', 'DOLLAR', 'DONE', 'DONKEY', 'DOOR',\n      'DOT', 'DOUBLE', 'DOUBT', 'DOWN', 'DOZEN', 'DRAW', 'DRAWN', 'DREAM',\n      'DRESS', 'DREW', 'DRIED', 'DRINK', 'DRIVE', 'DRIVEN', 'DRIVER', 'DRIVING',\n      'DROP', 'DROPPED', 'DROVE', 'DRY', 'DUCK', 'DUE', 'DUG', 'DULL',\n      'DURING', 'DUST', 'DUTY', 'EACH', 'EAGER', 'EAR', 'EARLIER', 'EARLY',\n      'EARN', 'EARTH', 'EASIER', 'EASILY', 'EAST', 'EASY', 'EAT', 'EATEN',\n      'EDGE', 'EDUCATION', 'EFFECT', 'EFFORT', 'EGG', 'EIGHT', 'EITHER', 'ELECTRIC',\n      'ELECTRICITY', 'ELEMENT', 'ELEPHANT', 'ELEVEN', 'ELSE', 'EMPTY', 'END', 'ENEMY',\n      'ENERGY', 'ENGINE', 'ENGINEER', 'ENJOY', 'ENOUGH', 'ENTER', 'ENTIRE', 'ENTIRELY',\n      'ENVIRONMENT', 'EQUAL', 'EQUALLY', 'EQUATOR', 'EQUIPMENT', 'ESCAPE', 'ESPECIALLY', 'ESSENTIAL',\n      'ESTABLISH', 'EVEN', 'EVENING', 'EVENT', 'EVENTUALLY', 'EVER', 'EVERY', 'EVERYBODY',\n      'EVERYONE', 'EVERYTHING', 'EVERYWHERE', 'EVIDENCE', 'EXACT', 'EXACTLY', 'EXAMINE', 'EXAMPLE',\n      'EXCELLENT', 'EXCEPT', 'EXCHANGE', 'EXCITED', 'EXCITEMENT', 'EXCITING', 'EXCLAIMED', 'EXERCISE',\n      'EXIST', 'EXPECT', 'EXPERIENCE', 'EXPERIMENT', 'EXPLAIN', 'EXPLANATION', 'EXPLORE', 'EXPRESS',\n      'EXPRESSION', 'EXTRA', 'EYE', 'FACE', 'FACING', 'FACT', 'FACTOR', 'FACTORY',\n      'FAILED', 'FAIR', 'FAIRLY', 'FALL', 'FALLEN', 'FAMILIAR', 'FAMILY', 'FAMOUS',\n      'FAR', 'FARM', 'FARMER', 'FARTHER', 'FAST', 'FASTENED', 'FASTER', 'FAT',\n      'FATHER', 'FAVORITE', 'FEAR', 'FEATHERS', 'FEATURE', 'FED', 'FEED', 'FEEL',\n      'FEET', 'FELL', 'FELLOW', 'FELT', 'FENCE', 'FEW', 'FEWER', 'FIELD',\n      'FIERCE', 'FIFTEEN', 'FIFTH', 'FIFTY', 'FIGHT', 'FIGHTING', 'FIGURE', 'FILL',\n      'FILM', 'FINAL', 'FINALLY', 'FIND', 'FINE', 'FINEST', 'FINGER', 'FINISH',\n      'FIRE', 'FIREPLACE', 'FIRM', 'FIRST', 'FISH', 'FIVE', 'FIX', 'FLAG',\n      'FLAME', 'FLAT', 'FLEW', 'FLIES', 'FLIGHT', 'FLOATING', 'FLOOR', 'FLOW',\n      'FLOWER', 'FLY', 'FOG', 'FOLKS', 'FOLLOW', 'FOOD', 'FOOT', 'FOOTBALL',\n      'FOR', 'FORCE', 'FOREIGN', 'FOREST', 'FORGET', 'FORGOT', 'FORGOTTEN', 'FORM',\n      'FORMER', 'FORT', 'FORTH', 'FORTY', 'FORWARD', 'FOUGHT', 'FOUND', 'FOUR',\n      'FOURTH', 'FOX', 'FRAME', 'FREE', 'FREEDOM', 'FREQUENTLY', 'FRESH', 'FRIEND',\n      'FRIENDLY', 'FRIGHTEN', 'FROG', 'FROM', 'FRONT', 'FROZEN', 'FRUIT', 'FUEL',\n      'FULL', 'FULLY', 'FUN', 'FUNCTION', 'FUNNY', 'FUR', 'FURNITURE', 'FURTHER',\n      'FUTURE', 'GAIN', 'GAME', 'GARAGE', 'GARDEN', 'GAS', 'GASOLINE', 'GATE',\n      'GATHER', 'GAVE', 'GENERAL', 'GENERALLY', 'GENTLE', 'GENTLY', 'GET', 'GETTING',\n      'GIANT', 'GIFT', 'GIRL', 'GIVE', 'GIVEN', 'GIVING', 'GLAD', 'GLASS',\n      'GLOBE', 'GO', 'GOES', 'GOLD', 'GOLDEN', 'GONE', 'GOOD', 'GOOSE',\n      'GOT', 'GOVERNMENT', 'GRABBED', 'GRADE', 'GRADUALLY', 'GRAIN', 'GRANDFATHER', 'GRANDMOTHER',\n      'GRAPH', 'GRASS', 'GRAVITY', 'GRAY', 'GREAT', 'GREATER', 'GREATEST', 'GREATLY',\n      'GREEN', 'GREW', 'GROUND', 'GROUP', 'GROW', 'GROWN', 'GROWTH', 'GUARD',\n      'GUESS', 'GUIDE', 'GULF', 'GUN', 'HABIT', 'HAD', 'HAIR', 'HALF',\n      'HALFWAY', 'HALL', 'HAND', 'HANDLE', 'HANDSOME', 'HANG', 'HAPPEN', 'HAPPENED',\n      'HAPPILY', 'HAPPY', 'HARBOR', 'HARD', 'HARDER', 'HARDLY', 'HAS', 'HAT',\n      'HAVE', 'HAVING', 'HAY', 'HE', 'HEADED', 'HEADING', 'HEALTH', 'HEARD',\n      'HEARING', 'HEART', 'HEAT', 'HEAVY', 'HEIGHT', 'HELD', 'HELLO', 'HELP',\n      'HELPFUL', 'HER', 'HERD', 'HERE', 'HERSELF', 'HIDDEN', 'HIDE', 'HIGH',\n      'HIGHER', 'HIGHEST', 'HIGHWAY', 'HILL', 'HIM', 'HIMSELF', 'HIS', 'HISTORY',\n      'HIT', 'HOLD', 'HOLE', 'HOLLOW', 'HOME', 'HONOR', 'HOPE', 'HORN',\n      'HORSE', 'HOSPITAL', 'HOT', 'HOUR', 'HOUSE', 'HOW', 'HOWEVER', 'HUGE',\n      'HUMAN', 'HUNDRED', 'HUNG', 'HUNGRY', 'HUNT', 'HUNTER', 'HURRIED', 'HURRY',\n      'HURT', 'HUSBAND', 'ICE', 'IDEA', 'IDENTITY', 'IF', 'ILL', 'IMAGE',\n      'IMAGINE', 'IMMEDIATELY', 'IMPORTANCE', 'IMPORTANT', 'IMPOSSIBLE', 'IMPROVE', 'IN', 'INCH',\n      'INCLUDE', 'INCLUDING', 'INCOME', 'INCREASE', 'INDEED', 'INDEPENDENT', 'INDICATE', 'INDIVIDUAL',\n      'INDUSTRIAL', 'INDUSTRY', 'INFLUENCE', 'INFORMATION', 'INSIDE', 'INSTANCE', 'INSTANT', 'INSTEAD',\n      'INSTRUMENT', 'INTEREST', 'INTERIOR', 'INTO', 'INTRODUCED', 'INVENTED', 'INVOLVED', 'IRON',\n      'IS', 'ISLAND', 'IT', 'ITS', 'ITSELF', 'JACK', 'JAR', 'JET',\n      'JOB', 'JOIN', 'JOINED', 'JOURNEY', 'JOY', 'JUDGE', 'JUMP', 'JUNGLE',\n      'JUST', 'KEEP', 'KEPT', 'KEY', 'KIDS', 'KILL', 'KIND', 'KITCHEN',\n      'KNEW', 'KNIFE', 'KNOW', 'KNOWLEDGE', 'KNOWN', 'LABEL', 'LABOR', 'LACK',\n      'LADY', 'LAID', 'LAKE', 'LAMP', 'LAND', 'LANGUAGE', 'LARGE', 'LARGER',\n      'LARGEST', 'LAST', 'LATE', 'LATER', 'LAUGH', 'LAW', 'LAY', 'LAYERS',\n      'LEAD', 'LEADER', 'LEAF', 'LEARN', 'LEAST', 'LEATHER', 'LEAVE', 'LEAVING',\n      'LED', 'LEFT', 'LEG', 'LENGTH', 'LESSON', 'LET', 'LETTER', 'LEVEL',\n      'LIBRARY', 'LIE', 'LIFE', 'LIFT', 'LIGHT', 'LIKE', 'LIKELY', 'LIMITED',\n      'LINE', 'LION', 'LIPS', 'LIQUID', 'LIST', 'LISTEN', 'LITTLE', 'LIVE',\n      'LIVING', 'LOAD', 'LOCAL', 'LOCATE', 'LOCATION', 'LOG', 'LONELY', 'LONG',\n      'LONGER', 'LOOK', 'LOOSE', 'LOSE', 'LOSS', 'LOST', 'LOT', 'LOUD',\n      'LOVE', 'LOVELY', 'LOW', 'LOWER', 'LUCK', 'LUCKY', 'LUNCH', 'LUNGS',\n      'LYING', 'MACHINE', 'MACHINERY', 'MAD', 'MADE', 'MAGIC', 'MAGNET', 'MAIL',\n      'MAIN', 'MAINLY', 'MAJOR', 'MAKE', 'MAKING', 'MAN', 'MANAGED', 'MANNER',\n      'MANUFACTURING', 'MANY', 'MAP', 'MARK', 'MARKET', 'MARRIED', 'MASS', 'MASSAGE',\n      'MASTER', 'MATERIAL', 'MATHEMATICS', 'MATTER', 'MAY', 'MAYBE', 'ME', 'MEAL',\n      'MEAN', 'MEANS', 'MEANT', 'MEASURE', 'MEAT', 'MEDICINE', 'MEET', 'MELTED',\n      'MEMBER', 'MEMORY', 'MEN', 'MENTAL', 'MERELY', 'MET', 'METAL', 'METHOD',\n      'MICE', 'MIDDLE', 'MIGHT', 'MIGHTY', 'MILE', 'MILITARY', 'MILK', 'MILL',\n      'MIND', 'MINE', 'MINERALS', 'MINUTE', 'MIRROR', 'MISSING', 'MISSION', 'MISTAKE',\n      'MIX', 'MIXTURE', 'MODEL', 'MODERN', 'MOLECULAR', 'MOMENT', 'MONEY', 'MONKEY',\n      'MONTH', 'MOOD', 'MOON', 'MORE', 'MORNING', 'MOST', 'MOSTLY', 'MOTHER',\n      'MOTION', 'MOTOR', 'MOUNTAIN', 'MOUSE', 'MOUTH', 'MOVE', 'MOVEMENT', 'MOVIE',\n      'MOVING', 'MUD', 'MUSCLE', 'MUSIC', 'MUSICAL', 'MUST', 'MY', 'MYSELF',\n      'MYSTERIOUS', 'NAILS', 'NAME', 'NATION', 'NATIONAL', 'NATIVE', 'NATURAL', 'NATURALLY',\n      'NATURE', 'NEAR', 'NEARBY', 'NEARER', 'NEAREST', 'NEARLY', 'NECESSARY', 'NECK',\n      'NEEDED', 'NEEDLE', 'NEEDS', 'NEGATIVE', 'NEIGHBOR', 'NEIGHBORHOOD', 'NERVOUS', 'NEST',\n      'NEVER', 'NEW', 'NEWS', 'NEWSPAPER', 'NEXT', 'NICE', 'NIGHT', 'NINE',\n      'NO', 'NOBODY', 'NODDED', 'NOISE', 'NONE', 'NOON', 'NOR', 'NORTH',\n      'NOSE', 'NOT', 'NOTE', 'NOTED', 'NOTHING', 'NOTICE', 'NOUN', 'NOW',\n      'NUMBER', 'NUMERAL', 'NUTS', 'OBJECT', 'OBSERVE', 'OBTAIN', 'OCCASIONALLY', 'OCCUR',\n      'OCEAN', 'OF', 'OFF', 'OFFER', 'OFFICE', 'OFFICER', 'OFFICIAL', 'OIL',\n      'OLD', 'OLDER', 'OLDEST', 'ON', 'ONCE', 'ONE', 'ONLY', 'ONTO',\n      'OPEN', 'OPERATION', 'OPINION', 'OPPORTUNITY', 'OPPOSITE', 'OR', 'ORANGE', 'ORBIT',\n      'ORDER', 'ORDINARY', 'ORGANIZATION', 'ORGANIZED', 'ORIGIN', 'ORIGINAL', 'OTHER', 'OUGHT',\n      'OUR', 'OURSELVES', 'OUT', 'OUTER', 'OUTLINE', 'OUTSIDE', 'OVER', 'OWN',\n      'OWNER', 'OXYGEN', 'PACK', 'PACKAGE', 'PAGE', 'PAID', 'PAIN', 'PAINT',\n      'PAIR', 'PALACE', 'PALE', 'PAN', 'PAPER', 'PARAGRAPH', 'PARALLEL', 'PARENT',\n      'PARK', 'PART', 'PARTICLES', 'PARTICULAR', 'PARTICULARLY', 'PARTLY', 'PARTS', 'PARTY',\n      'PASS', 'PASSAGE', 'PAST', 'PATH', 'PATTERN', 'PAY', 'PEACE', 'PEN',\n      'PENCIL', 'PEOPLE', 'PER', 'PERCENT', 'PERFECT', 'PERFECTLY', 'PERHAPS', 'PERIOD',\n      'PERSON', 'PERSONAL', 'PET', 'PHRASE', 'PHYSICAL', 'PIANO', 'PICK', 'PICTURE',\n      'PICTURED', 'PIE', 'PIECE', 'PIG', 'PILE', 'PILOT', 'PINE', 'PINK',\n      'PIPE', 'PITCH', 'PLACE', 'PLAIN', 'PLAN', 'PLANE', 'PLANET', 'PLANNED',\n      'PLANNING', 'PLANT', 'PLASTIC', 'PLATE', 'PLATES', 'PLAY', 'PLEASANT', 'PLEASE',\n      'PLEASURE', 'PLENTY', 'PLURAL', 'PLUS', 'POCKET', 'POEM', 'POET', 'POETRY',\n      'POINT', 'POLE', 'POLICE', 'POLICEMAN', 'POLITICAL', 'POND', 'PONY', 'POOL',\n      'POOR', 'POPULAR', 'POPULATION', 'PORCH', 'PORT', 'POSITION', 'POSITIVE', 'POSSIBLE',\n      'POSSIBLY', 'POST', 'POT', 'POTATOES', 'POUND', 'POUR', 'POWDER', 'POWER',\n      'POWERFUL', 'PRACTICAL', 'PRACTICE', 'PREPARE', 'PRESENT', 'PRESIDENT', 'PRESS', 'PRESSURE',\n      'PRETTY', 'PREVENT', 'PREVIOUS', 'PRICE', 'PRIDE', 'PRIMITIVE', 'PRINCIPAL', 'PRINCIPLE',\n      'PRINTED', 'PRIVATE', 'PRIZE', 'PROBABLY', 'PROBLEM', 'PROCESS', 'PRODUCE', 'PRODUCT',\n      'PRODUCTION', 'PROGRAM', 'PROGRESS', 'PROMISED', 'PROPER', 'PROPERLY', 'PROPERTY', 'PROTECTION',\n      'PROUD', 'PROVE', 'PROVIDE', 'PUBLIC', 'PULL', 'PUPIL', 'PURE', 'PURPLE',\n      'PURPOSE', 'PUSH', 'PUT', 'PUTTING', 'QUARTER', 'QUEEN', 'QUESTION', 'QUICK',\n      'QUICKLY', 'QUIET', 'QUIETLY', 'QUITE', 'RABBIT', 'RACE', 'RADIO', 'RAILROAD',\n      'RAIN', 'RAISE', 'RAN', 'RANCH', 'RANGE', 'RAPIDLY', 'RATE', 'RATHER',\n      'RAW', 'RAYS', 'REACH', 'READ', 'READER', 'READY', 'REAL', 'REALIZE',\n      'REAR', 'REASON', 'RECALL', 'RECEIVE', 'RECENT', 'RECENTLY', 'RECOGNIZE', 'RECORD',\n      'RED', 'REFER', 'REFUSED', 'REGION', 'REGULAR', 'RELATED', 'RELATIONSHIP', 'RELIGIOUS',\n      'REMAIN', 'REMARKABLE', 'REMEMBER', 'REMOVE', 'REPEAT', 'REPLACE', 'REPLIED', 'REPORT',\n      'REPRESENT', 'REQUIRE', 'RESEARCH', 'RESPECT', 'REST', 'RESULT', 'RETURN', 'REVIEW',\n      'RHYME', 'RHYTHM', 'RICE', 'RICH', 'RIDE', 'RIDING', 'RIGHT', 'RING',\n      'RISE', 'RISING', 'RIVER', 'ROAD', 'ROAR', 'ROCK', 'ROCKET', 'ROCKY',\n      'ROD', 'ROLL', 'ROOF', 'ROOM', 'ROOT', 'ROPE', 'ROSE', 'ROUGH',\n      'ROUND', 'ROUTE', 'ROW', 'RUBBED', 'RUBBER', 'RULE', 'RULER', 'RUN',\n      'RUNNING', 'RUSH', 'SAD', 'SADDLE', 'SAFE', 'SAFETY', 'SAID', 'SAIL',\n      'SALE', 'SALMON', 'SALT', 'SAME', 'SAND', 'SANG', 'SAT', 'SATELLITES',\n      'SATISFIED', 'SAVE', 'SAVED', 'SAW', 'SAY', 'SCALE', 'SCARED', 'SCENE',\n      'SCHOOL', 'SCIENCE', 'SCIENTIFIC', 'SCIENTIST', 'SCORE', 'SCREEN', 'SEA', 'SEARCH',\n      'SEASON', 'SEAT', 'SECOND', 'SECRET', 'SECTION', 'SEE', 'SEED', 'SEEING',\n      'SEEMS', 'SEEN', 'SELDOM', 'SELECT', 'SELECTION', 'SELL', 'SEND', 'SENSE',\n      'SENT', 'SENTENCE', 'SEPARATE', 'SERIES', 'SERIOUS', 'SERVE', 'SERVICE', 'SETS',\n      'SETTING', 'SETTLE', 'SETTLERS', 'SEVEN', 'SEVERAL', 'SHADE', 'SHADOW', 'SHAKE',\n      'SHAKING', 'SHALL', 'SHALLOW', 'SHAPE', 'SHARE', 'SHARP', 'SHE', 'SHEEP',\n      'SHEET', 'SHELF', 'SHELLS', 'SHELTER', 'SHINE', 'SHINNING', 'SHIP', 'SHIRT',\n      'SHOE', 'SHOOT', 'SHOP', 'SHORE', 'SHORT', 'SHORTER', 'SHOT', 'SHOULD',\n      'SHOULDER', 'SHOUT', 'SHOW', 'SHOWN', 'SHUT', 'SICK', 'SIDES', 'SIGHT',\n      'SIGN', 'SIGNAL', 'SILENCE', 'SILENT', 'SILK', 'SILLY', 'SILVER', 'SIMILAR',\n      'SIMPLE', 'SIMPLEST', 'SIMPLY', 'SINCE', 'SING', 'SINGLE', 'SINK', 'SISTER',\n      'SIT', 'SITTING', 'SITUATION', 'SIX', 'SIZE', 'SKILL', 'SKIN', 'SKY',\n      'SLABS', 'SLAVE', 'SLEEP', 'SLEPT', 'SLIDE', 'SLIGHT', 'SLIGHTLY', 'SLIP',\n      'SLIPPED', 'SLOPE', 'SLOW', 'SLOWLY', 'SMALL', 'SMALLER', 'SMALLEST', 'SMELL',\n      'SMILE', 'SMOKE', 'SMOOTH', 'SNAKE', 'SNOW', 'SO', 'SOAP', 'SOCIAL',\n      'SOCIETY', 'SOFT', 'SOFTLY', 'SOIL', 'SOLAR', 'SOLD', 'SOLDIER', 'SOLID',\n      'SOLUTION', 'SOLVE', 'SOME', 'SOMEBODY', 'SOMEHOW', 'SOMEONE', 'SOMETHING', 'SOMETIME',\n      'SOMEWHERE', 'SON', 'SONG', 'SOON', 'SORT', 'SOUND', 'SOURCE', 'SOUTH',\n      'SOUTHERN', 'SPACE', 'SPEAK', 'SPECIAL', 'SPECIES', 'SPECIFIC', 'SPEECH', 'SPEED',\n      'SPELL', 'SPEND', 'SPENT', 'SPIDER', 'SPIN', 'SPIRIT', 'SPITE', 'SPLIT',\n      'SPOKEN', 'SPORT', 'SPREAD', 'SPRING', 'SQUARE', 'STAGE', 'STAIRS', 'STAND',\n      'STANDARD', 'STAR', 'STARED', 'START', 'STATE', 'STATEMENT', 'STATION', 'STAY',\n      'STEADY', 'STEAM', 'STEEL', 'STEEP', 'STEMS', 'STEP', 'STEPPED', 'STICK',\n      'STIFF', 'STILL', 'STOCK', 'STOMACH', 'STONE', 'STOOD', 'STOP', 'STOPPED',\n      'STORE', 'STORM', 'STORY', 'STOVE', 'STRAIGHT', 'STRANGE', 'STRANGER', 'STRAW',\n      'STREAM', 'STREET', 'STRENGTH', 'STRETCH', 'STRIKE', 'STRING', 'STRIP', 'STRONG',\n      'STRONGER', 'STRUCK', 'STRUCTURE', 'STRUGGLE', 'STUCK', 'STUDENT', 'STUDIED', 'STUDYING',\n      'SUBJECT', 'SUBSTANCE', 'SUCCESS', 'SUCCESSFUL', 'SUCH', 'SUDDEN', 'SUDDENLY', 'SUGAR',\n      'SUGGEST', 'SUIT', 'SUM', 'SUMMER', 'SUN', 'SUNLIGHT', 'SUPPER', 'SUPPLY',\n      'SUPPORT', 'SUPPOSE', 'SURE', 'SURFACE', 'SURPRISE', 'SURROUNDED', 'SWAM', 'SWEET',\n      'SWEPT', 'SWIM', 'SWIMMING', 'SWING', 'SWUNG', 'SYLLABLE', 'SYMBOL', 'SYSTEM',\n      'TABLE', 'TAIL', 'TAKE', 'TAKEN', 'TALES', 'TALK', 'TALL', 'TANK',\n      'TAPE', 'TASK', 'TASTE', 'TAUGHT', 'TAX', 'TEA', 'TEACH', 'TEACHER',\n      'TEAM', 'TEARS', 'TEETH', 'TELEPHONE', 'TELEVISION', 'TELL', 'TEMPERATURE', 'TEN',\n      'TENT', 'TERM', 'TERRIBLE', 'TEST', 'THAN', 'THANK', 'THAT', 'THEE',\n      'THEM', 'THEMSELVES', 'THEN', 'THEORY', 'THERE', 'THEREFORE', 'THESE', 'THEY',\n      'THICK', 'THIN', 'THING', 'THINK', 'THIRD', 'THIRTY', 'THIS', 'THOSE',\n      'THOU', 'THOUGH', 'THOUGHT', 'THOUSAND', 'THREAD', 'THREE', 'THREW', 'THROAT',\n      'THROUGH', 'THROUGHOUT', 'THROW', 'THROWN', 'THUMB', 'THUS', 'THY', 'TIDE',\n      'TIE', 'TIGHT', 'TIGHTLY', 'TILL', 'TIME', 'TIN', 'TINY', 'TIP',\n      'TIRED', 'TITLE', 'TO', 'TOBACCO', 'TODAY', 'TOGETHER', 'TOLD', 'TOMORROW',\n      'TONE', 'TONGUE', 'TONIGHT', 'TOO', 'TOOK', 'TOOL', 'TOP', 'TOPIC',\n      'TORN', 'TOTAL', 'TOUCH', 'TOWARD', 'TOWER', 'TOWN', 'TOY', 'TRACE',\n      'TRACK', 'TRADE', 'TRAFFIC', 'TRAIL', 'TRAIN', 'TRANSPORTATION', 'TRAP', 'TRAVEL',\n      'TREATED', 'TREE', 'TRIANGLE', 'TRIBE', 'TRICK', 'TRIED', 'TRIP', 'TROOPS',\n      'TROPICAL', 'TROUBLE', 'TRUCK', 'TRUNK', 'TRUTH', 'TRY', 'TUBE', 'TUNE',\n      'TURN', 'TWELVE', 'TWENTY', 'TWICE', 'TWO', 'TYPE', 'TYPICAL', 'UNCLE',\n      'UNDER', 'UNDERLINE', 'UNDERSTANDING', 'UNHAPPY', 'UNION', 'UNIT', 'UNIVERSE', 'UNKNOWN',\n      'UNLESS', 'UNTIL', 'UNUSUAL', 'UP', 'UPON', 'UPPER', 'UPWARD', 'US',\n      'USE', 'USEFUL', 'USING', 'USUAL', 'USUALLY', 'VALLEY', 'VALUABLE', 'VALUE',\n      'VAPOR', 'VARIETY', 'VARIOUS', 'VAST', 'VEGETABLE', 'VERB', 'VERTICAL', 'VERY',\n      'VESSELS', 'VICTORY', 'VIEW', 'VILLAGE', 'VISIT', 'VISITOR', 'VOICE', 'VOLUME',\n      'VOTE', 'VOWEL', 'VOYAGE', 'WAGON', 'WAIT', 'WALK', 'WALL', 'WANT',\n      'WAR', 'WARM', 'WARN', 'WAS', 'WASH', 'WASTE', 'WATCH', 'WATER',\n      'WAVE', 'WAY', 'WE', 'WEAK', 'WEALTH', 'WEAR', 'WEATHER', 'WEEK',\n      'WEIGH', 'WEIGHT', 'WELCOME', 'WELL', 'WENT', 'WERE', 'WEST', 'WESTERN',\n      'WET', 'WHALE', 'WHAT', 'WHATEVER', 'WHEAT', 'WHEEL', 'WHEN', 'WHENEVER',\n      'WHERE', 'WHEREVER', 'WHETHER', 'WHICH', 'WHILE', 'WHISPERED', 'WHISTLE', 'WHITE',\n      'WHO', 'WHOLE', 'WHOM', 'WHOSE', 'WHY', 'WIDE', 'WIDELY', 'WIFE',\n      'WILD', 'WILL', 'WILLING', 'WIN', 'WIND', 'WINDOW', 'WING', 'WINTER',\n      'WIRE', 'WISE', 'WISH', 'WITH', 'WITHIN', 'WITHOUT', 'WOLF', 'WOMEN',\n      'WON', 'WONDER', 'WONDERFUL', 'WOOD', 'WOODEN', 'WOOL', 'WORD', 'WORE',\n      'WORK', 'WORKER', 'WORLD', 'WORRIED', 'WORRY', 'WORSE', 'WORTH', 'WOULD',\n      'WRAPPED', 'WRITE', 'WRITER', 'WRITING', 'WRITTEN', 'WRONG', 'WROTE', 'YARD',\n      'YEAR', 'YELLOW', 'YES', 'YESTERDAY', 'YET', 'YOU', 'YOUNG', 'YOUNGER',\n      'YOUR', 'YOURSELF', 'YOUTH', 'ZERO', 'ZOO']\n\n  }\n\n  showWord() {\n    console.log(this);\n    let randomIdx = Math.floor(Math.random() * this.words.length);\n    return this.words[randomIdx];\n  }\n\n}\n\n// export default Dictionary;\nmodule.exports = Dictionary;\n\n//# sourceURL=webpack:///./src/dictionary.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Dictionary = __webpack_require__(/*! ./dictionary.js */ \"./src/dictionary.js\");\n\nclass Game {\n  constructor(ctx, currentWord, wordInput, scoreShow){\n    this.ctx = ctx;\n    this.currentWord = currentWord;\n    this.wordInput = wordInput;\n    this.scoreShow = scoreShow;\n\n    this.score = 0;\n\n    this.dictionary = new Dictionary();\n\n    this.start = this.start.bind(this);\n    this.match = this.match.bind(this);\n  }\n\n  start() {\n    this.currentWord.innerHTML = this.dictionary.showWord();\n    this.wordInput.addEventListener('input', this.match);\n    this.scoreShow.innerHTML = 0;\n  }\n\n  match() {\n    if (this.wordInput.value === this.currentWord.innerHTML) {\n      this.currentWord.innerHTML = this.dictionary.showWord();\n      this.wordInput.value = '';\n      this.score++;\n      this.scoreShow.innerHTML = this.score;\n    }\n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\ndocument.addEventListener('DOMContentLoaded', (e) => {\n  const currentWord = document.getElementById(\"current-word\");\n  const wordInput = document.getElementById(\"word-input\");\n  const scoreShow = document.getElementById(\"score\");\n\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  const game = new Game(ctx, currentWord, wordInput, scoreShow);\n  console.log(game);\n  game.start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });