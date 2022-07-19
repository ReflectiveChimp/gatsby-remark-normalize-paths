const normalize = require("normalize-path")
const {relative, dirname} = require("path")

function getRelativePath(fileAbsolutePath, path) {
  const currentAbsoluteDir = normalize(process.cwd())
  const nodeFileAbsoluteDir = dirname(fileAbsolutePath)
  const nodeFileRelativeDir = nodeFileAbsoluteDir.replace(
    `${currentAbsoluteDir}`,
    ""
  )

  return normalize(relative(nodeFileRelativeDir, path))
}

module.exports = {getRelativePath}
