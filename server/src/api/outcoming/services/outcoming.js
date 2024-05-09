'use strict';

/**
 * outcoming service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::outcoming.outcoming');
