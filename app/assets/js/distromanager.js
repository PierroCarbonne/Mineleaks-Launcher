const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Test : exports.REMOTE_DISTRO_URL = 'https://helios-files.geekcorner.eu.org/distribution.json'

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'https://www.mineleak.fr/launcher/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://www.paladium-login.fr/launcher/distribution.json'



const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api