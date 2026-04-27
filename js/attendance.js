/**
 * Calculates the current attendance percentage and how many more classes are required.
 * 
 * @param {number} total - Total classes conducted
 * @param {number} attended - Classes attended
 * @param {number} needed - Target percentage
 * @returns {object|null} - The result object or null if invalid inputs
 */
function calculateAttendance(total, attended, needed) {
    if (isNaN(total) || isNaN(attended) || isNaN(needed)) return null;
    if (total <= 0 || attended < 0 || attended > total || needed <= 0 || needed > 100) return null;

    const currentPercentage = (attended / total) * 100;
    
    // Formula: (target * total - 100 * attended) / (100 - target)
    const requiredToAttend = Math.ceil(((needed * total) - (100 * attended)) / (100 - needed));

    return {
        currentPercentage: currentPercentage.toFixed(1),
        requiredToAttend: requiredToAttend,
        neededPercentage: needed
    };
}
