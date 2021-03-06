/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

    // Define template paths to load
    const templatePaths = [
  
      // Actor Sheet Partials
      //"systems/swd6/templates/actors/parts/actor-traits.html",
      //"systems/dnd5e/templates/actors/parts/actor-inventory.html",
    
  
      // Item Sheet Partials
      //"systems/dnd5e/templates/items/parts/item-action.html",
      //"systems/dnd5e/templates/items/parts/item-activation.html",
      //"systems/dnd5e/templates/items/parts/item-description.html",
     
    ];
  
    // Load the template parts
    return loadTemplates(templatePaths);
  };
  